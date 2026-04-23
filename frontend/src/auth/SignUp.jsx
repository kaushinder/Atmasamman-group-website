import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Signup() {
  const { signup, googleLogin } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "", email: "", password: "", confirmPassword: "", agree: false,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email";
    if (!form.password) errs.password = "Password is required";
    else if (form.password.length < 6) errs.password = "Minimum 6 characters";
    if (!form.confirmPassword) errs.confirmPassword = "Please confirm your password";
    else if (form.password !== form.confirmPassword) errs.confirmPassword = "Passwords do not match";
    if (!form.agree) errs.agree = "You must accept Terms & Conditions";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    setLoading(true);
    try {
      await signup(form.name, form.email, form.password);
      navigate("/");
    } catch (err) {
      setServerError(getFirebaseError(err.code));
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setServerError("");
    setGoogleLoading(true);
    try {
      await googleLogin();
      navigate("/");
    } catch (err) {
      setServerError(getFirebaseError(err.code));
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="container-fluid min-vh-100 py-5">
      <div className="row h-100">
        <div className="col-md-6 d-flex flex-column justify-content-center px-5">
          <h4 className="text-primary mb-2">Atmasamman Group</h4>
          <h2 className="fw-bold mb-2">Create Your Account</h2>
          <p className="text-muted mb-4">Join us and start your journey today.</p>

          {serverError && <div className="alert alert-danger py-2 mb-3">{serverError}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" name="name"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                placeholder="Enter your name" value={form.name} onChange={handleChange} />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input type="email" name="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                placeholder="Enter your email" value={form.email} onChange={handleChange} />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" name="password"
                className={`form-control ${errors.password ? "is-invalid" : ""}`}
                placeholder="Min 6 characters" value={form.password} onChange={handleChange} />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input type="password" name="confirmPassword"
                className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
                placeholder="Confirm password" value={form.confirmPassword} onChange={handleChange} />
              {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
            </div>

            <div className="form-check mb-3">
              <input type="checkbox" name="agree"
                className={`form-check-input ${errors.agree ? "is-invalid" : ""}`}
                checked={form.agree} onChange={handleChange} />
              <label className="form-check-label">
                I agree to <Link to="/terms">Terms &amp; Conditions</Link>
              </label>
              {errors.agree && <div className="invalid-feedback">{errors.agree}</div>}
            </div>

            <div className="d-flex gap-3 mb-3">
              <button type="submit" className="btn btn-primary px-4" disabled={loading}>
                {loading && <span className="spinner-border spinner-border-sm me-2" />}
                {loading ? "Creating..." : "Sign Up"}
              </button>
              <Link to="/login" className="btn btn-outline-primary px-4">Login</Link>
            </div>
          </form>

          <div className="text-center mb-2"><small className="text-muted">OR</small></div>

          <button
            onClick={handleGoogle}
            disabled={googleLoading}
            className="btn btn-outline-secondary d-flex align-items-center justify-content-center gap-2 w-100"
          >
            {googleLoading
              ? <span className="spinner-border spinner-border-sm" />
              : <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="google" width="18" />}
            {googleLoading ? "Connecting..." : "Continue with Google"}
          </button>
        </div>

        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center bg-light">
          <img src="assets/images/ecosystem.png" alt="Signup" className="img-fluid" style={{ maxHeight: "80%" }} />
        </div>
      </div>
    </div>
  );
}

function getFirebaseError(code) {
  const map = {
    "auth/email-already-in-use": "An account with this email already exists.",
    "auth/invalid-email":        "Please enter a valid email address.",
    "auth/weak-password":        "Password must be at least 6 characters.",
    "auth/popup-closed-by-user": "Google sign-in was cancelled.",
  };
  return map[code] || "Something went wrong. Please try again.";
}

export default Signup;
