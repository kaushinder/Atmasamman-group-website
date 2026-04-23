import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const PROGRAMS = [
  "ATS - Tech Services",
  "ASAI - AI School",
  "AIMT - Management & Tech",
  "Foundation Program",
];

function Enroll() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const [form, setForm] = useState({
    name: currentUser?.displayName || "",
    email: currentUser?.email || "",
    phone: "",
    program: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Enter a valid email";
    if (!form.phone.trim()) errs.phone = "Phone number is required";
    if (!form.program) errs.program = "Please select a program";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/enroll`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        navigate("/payment", { state: { program: form.program, name: form.name, email: form.email } });
      } else {
        setServerError(data.message || "Enrollment failed. Please try again.");
      }
    } catch (err) {
      setServerError("Unable to submit enrollment. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Enroll Now</h2>
        <p className="text-muted">Join Atmasamman programs and start your journey today.</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6">
          {serverError && <div className="alert alert-danger">{serverError}</div>}

          <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-light">
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" name="name"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                value={form.name} onChange={handleChange} placeholder="Enter your name" />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" name="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                value={form.email} onChange={handleChange} placeholder="Enter your email" />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input type="tel" name="phone"
                className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                value={form.phone} onChange={handleChange} placeholder="Enter your phone number" />
              {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
            </div>
            <div className="mb-3">
              <label className="form-label">Select Program</label>
              <select name="program"
                className={`form-select ${errors.program ? "is-invalid" : ""}`}
                value={form.program} onChange={handleChange}>
                <option value="">Choose...</option>
                {PROGRAMS.map((p) => <option key={p}>{p}</option>)}
              </select>
              {errors.program && <div className="invalid-feedback">{errors.program}</div>}
            </div>
            <div className="mb-3">
              <label className="form-label">Message (Optional)</label>
              <textarea name="message" className="form-control" rows="3"
                value={form.message} onChange={handleChange} placeholder="Any questions or notes..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
              {loading && <span className="spinner-border spinner-border-sm me-2" />}
              {loading ? "Submitting..." : "Submit & Proceed to Payment"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Enroll;
