import React, { useState } from "react";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
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
    if (!form.name.trim()) errs.name = "Full name is required";
    if (!form.email) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Enter a valid email";
    if (!form.message.trim()) errs.message = "Message cannot be empty";
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
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(data.message);
        setForm({ name: "", email: "", message: "" });
      } else {
        setServerError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setServerError("Unable to send message. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Get in Touch</h1>
        <p className="text-muted">
          We'd love to hear from you! Whether you have questions, ideas, or want to
          collaborate, feel free to reach out to us.
        </p>
      </div>

      <div className="row align-items-start">
        <div className="col-lg-5 mb-4">
          <h4 className="fw-bold mb-3">Connect with Us</h4>
          <p className="text-muted">
            Atmasamman Group is committed to empowering individuals through technology,
            education, and innovation. Reach out for courses, collaborations, or any queries.
          </p>
          <p><strong>Email:</strong>{" "}
            <a href="mailto:support.atmasamman@gmail.com" className="text-decoration-none text-primary">
              support.atmasamman@gmail.com
            </a>
          </p>
          <p><strong>Phone:</strong> +91 7830060800</p>
          <p><strong>Location:</strong> Bulandshahr, India</p>
          <div className="d-flex gap-3 mt-3 fs-5">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-dark">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-dark">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-dark">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>

        <div className="col-lg-7">
          <div className="contact-card p-4">
            <h4 className="mb-3 fw-bold">Send us a Message</h4>

            {success && <div className="alert alert-success py-2">{success}</div>}
            {serverError && <div className="alert alert-danger py-2">{serverError}</div>}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" name="name"
                  className={`form-control custom-input ${errors.name ? "is-invalid" : ""}`}
                  placeholder="Enter your name" value={form.name} onChange={handleChange} />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input type="email" name="email"
                  className={`form-control custom-input ${errors.email ? "is-invalid" : ""}`}
                  placeholder="Enter your email" value={form.email} onChange={handleChange} />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea name="message"
                  className={`form-control custom-input ${errors.message ? "is-invalid" : ""}`}
                  rows="4" placeholder="Write your message..." value={form.message} onChange={handleChange}></textarea>
                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
              </div>
              <button type="submit" className="btn btn-primary w-100 py-2" disabled={loading}>
                {loading && <span className="spinner-border spinner-border-sm me-2" />}
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
