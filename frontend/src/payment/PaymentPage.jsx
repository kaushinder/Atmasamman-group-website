import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const PROGRAMS = [
  "ATS - Tech Services",
  "ASAI - AI School",
  "AIMT - Management & Tech",
  "Foundation Program",
];

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const [name, setName] = useState(location.state?.name || currentUser?.displayName || "");
  const [email, setEmail] = useState(location.state?.email || currentUser?.email || "");
  const [program, setProgram] = useState(location.state?.program || "");
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("card");
  const [cardForm, setCardForm] = useState({ cardNumber: "", expiry: "", cvv: "" });
  const [upi, setUpi] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [serverError, setServerError] = useState("");

  const handleCardChange = (e) => {
    setCardForm({ ...cardForm, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const errs = {};
    if (!name.trim()) errs.name = "Name is required";
    if (!email || !/\S+@\S+\.\S+/.test(email)) errs.email = "Valid email required";
    if (!program) errs.program = "Select a program";
    if (!amount || isNaN(amount) || Number(amount) <= 0) errs.amount = "Enter a valid amount";
    if (method === "card") {
      if (!cardForm.cardNumber || cardForm.cardNumber.replace(/\s/g, "").length < 16)
        errs.cardNumber = "Enter a valid 16-digit card number";
      if (!cardForm.expiry) errs.expiry = "Enter expiry date";
      if (!cardForm.cvv || cardForm.cvv.length < 3) errs.cvv = "Enter valid CVV";
    }
    if (method === "upi" && (!upi || !upi.includes("@")))
      errs.upi = "Enter valid UPI ID (e.g. name@upi)";
    return errs;
  };

  const handlePayment = async () => {
    setServerError("");
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/payment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, program, amount: Number(amount), method, userId: currentUser?.uid || "" }),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(data.data);
      } else {
        setServerError(data.message || "Payment failed. Please try again.");
      }
    } catch (err) {
      setServerError("Unable to process payment. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="container py-5 text-center">
        <div className="p-5 shadow rounded bg-white mx-auto" style={{ maxWidth: "480px" }}>
          <div style={{ fontSize: "4rem" }}>✅</div>
          <h3 className="fw-bold mt-3 text-success">Payment Successful!</h3>
          <p className="text-muted mt-2">Your enrollment for <strong>{success.program}</strong> is confirmed.</p>
          <div className="bg-light rounded p-3 my-3 text-start">
            <div><strong>Transaction ID:</strong> {success.transactionId}</div>
            <div><strong>Amount:</strong> ₹{success.amount}</div>
            <div><strong>Status:</strong> <span className="badge bg-success">{success.status}</span></div>
          </div>
          <button className="btn btn-primary px-4 mt-2" onClick={() => navigate("/")}>Back to Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Complete Your Payment</h2>
        <p className="text-muted">Secure your enrollment by completing the payment.</p>
      </div>

      {serverError && <div className="alert alert-danger text-center">{serverError}</div>}

      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="row g-4">
            <div className="col-md-5">
              <div className="p-4 shadow rounded bg-light h-100">
                <h5 className="fw-bold mb-3">Details</h5>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input type="text" className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    value={name} onChange={(e) => { setName(e.target.value); setErrors({ ...errors, name: "" }); }} />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    value={email} onChange={(e) => { setEmail(e.target.value); setErrors({ ...errors, email: "" }); }} />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="mb-3">
                  <label className="form-label">Select Program</label>
                  <select className={`form-select ${errors.program ? "is-invalid" : ""}`}
                    value={program} onChange={(e) => { setProgram(e.target.value); setErrors({ ...errors, program: "" }); }}>
                    <option value="">Choose...</option>
                    {PROGRAMS.map((p) => <option key={p}>{p}</option>)}
                  </select>
                  {errors.program && <div className="invalid-feedback">{errors.program}</div>}
                </div>
                <div className="mb-3">
                  <label className="form-label">Amount (₹)</label>
                  <input type="number" className={`form-control ${errors.amount ? "is-invalid" : ""}`}
                    value={amount} onChange={(e) => { setAmount(e.target.value); setErrors({ ...errors, amount: "" }); }}
                    placeholder="Enter amount" min="1" />
                  {errors.amount && <div className="invalid-feedback">{errors.amount}</div>}
                </div>
                <hr />
                <h4 className="fw-bold text-primary">₹ {amount || "0"}</h4>
              </div>
            </div>

            <div className="col-md-7">
              <div className="p-4 shadow rounded bg-white">
                <h5 className="fw-bold mb-3">Payment Method</h5>
                <div className="mb-3">
                  <div className="form-check">
                    <input type="radio" className="form-check-input" id="card"
                      checked={method === "card"} onChange={() => setMethod("card")} />
                    <label className="form-check-label" htmlFor="card">💳 Credit / Debit Card</label>
                  </div>
                  <div className="form-check">
                    <input type="radio" className="form-check-input" id="upi"
                      checked={method === "upi"} onChange={() => setMethod("upi")} />
                    <label className="form-check-label" htmlFor="upi">📱 UPI</label>
                  </div>
                </div>

                {method === "card" && (
                  <>
                    <div className="mb-2">
                      <input name="cardNumber" className={`form-control ${errors.cardNumber ? "is-invalid" : ""}`}
                        placeholder="Card Number (16 digits)" maxLength="19"
                        value={cardForm.cardNumber}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, "").replace(/(.{4})/g, "$1 ").trim();
                          setCardForm({ ...cardForm, cardNumber: val });
                          setErrors({ ...errors, cardNumber: "" });
                        }} />
                      {errors.cardNumber && <div className="invalid-feedback">{errors.cardNumber}</div>}
                    </div>
                    <div className="row">
                      <div className="col">
                        <input name="expiry" className={`form-control mb-2 ${errors.expiry ? "is-invalid" : ""}`}
                          placeholder="MM/YY" maxLength="5" value={cardForm.expiry}
                          onChange={(e) => {
                            let v = e.target.value.replace(/\D/g, "");
                            if (v.length >= 2) v = v.slice(0, 2) + "/" + v.slice(2);
                            handleCardChange({ target: { name: "expiry", value: v } });
                          }} />
                        {errors.expiry && <div className="invalid-feedback">{errors.expiry}</div>}
                      </div>
                      <div className="col">
                        <input name="cvv" type="password" className={`form-control mb-2 ${errors.cvv ? "is-invalid" : ""}`}
                          placeholder="CVV" maxLength="4" value={cardForm.cvv} onChange={handleCardChange} />
                        {errors.cvv && <div className="invalid-feedback">{errors.cvv}</div>}
                      </div>
                    </div>
                  </>
                )}

                {method === "upi" && (
                  <div className="mb-3">
                    <input className={`form-control ${errors.upi ? "is-invalid" : ""}`}
                      placeholder="Enter UPI ID (example@upi)" value={upi}
                      onChange={(e) => { setUpi(e.target.value); setErrors({ ...errors, upi: "" }); }} />
                    {errors.upi && <div className="invalid-feedback">{errors.upi}</div>}
                  </div>
                )}

                <button className="btn btn-primary w-100 mt-3 py-2" onClick={handlePayment} disabled={loading}>
                  {loading && <span className="spinner-border spinner-border-sm me-2" />}
                  {loading ? "Processing..." : `Pay ₹${amount || "0"} Now`}
                </button>
                <p className="text-muted text-center mt-3" style={{ fontSize: "0.78rem" }}>
                  🔒 This is a demo payment form. No real charges will be made.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
