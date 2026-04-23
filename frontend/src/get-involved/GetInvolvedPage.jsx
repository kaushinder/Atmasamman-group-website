import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

function GetInvolved() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", interest: "Volunteer", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Valid email required";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setServerError("");
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/getInvolved`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        if (form.interest === "Donate") {
          navigate("/payment", { state: { name: form.name, email: form.email } });
          return;
        }
        setSuccess(data.message);
        setForm({ name: "", email: "", interest: "Volunteer", message: "" });
      } else {
        setServerError(data.message || "Submission failed. Please try again.");
      }
    } catch (err) {
      setServerError("Unable to submit. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Get Involved</h2>
        <p className="text-muted">Join Atmasamman Foundation and make a real impact.</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          {success && <div className="alert alert-success">{success}</div>}
          {serverError && <div className="alert alert-danger">{serverError}</div>}

          <form className="p-4 shadow rounded bg-light" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" name="name"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                value={form.name} onChange={handleChange} placeholder="Your full name" />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" name="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                value={form.email} onChange={handleChange} placeholder="Your email address" />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="mb-3">
              <label className="form-label">How would you like to contribute?</label>
              <select name="interest" className="form-select" value={form.interest} onChange={handleChange}>
                <option>Volunteer</option>
                <option>Donate</option>
                <option>Mentor</option>
                <option>Partner</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Message (Optional)</label>
              <textarea name="message" className="form-control" rows="3"
                value={form.message} onChange={handleChange}
                placeholder="Tell us more about your interest..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
              {loading && <span className="spinner-border spinner-border-sm me-2" />}
              {loading ? "Submitting..." : (form.interest === "Donate" ? "Proceed to Donate" : "Submit")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GetInvolved;
