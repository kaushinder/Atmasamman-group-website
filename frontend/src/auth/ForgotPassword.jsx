import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ForgotPassword() {
  const { forgotPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);
    try {
      await forgotPassword(email);
      setMessage("Password reset link sent! Check your inbox.");
      setEmail("");
    } catch (err) {
      setError(
        err.code === "auth/user-not-found"
          ? "No account found with this email."
          : "Failed to send reset email. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0f172a, #1e293b)" }}
    >
      <div
        className="p-4"
        style={{
          width: "360px",
          borderRadius: "20px",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(15px)",
          boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
          color: "white",
          animation: "fadeUp 0.7s ease",
        }}
      >
        <div className="text-center mb-4">
          <h3
            className="fw-bold"
            style={{
              background: "linear-gradient(135deg, #60a5fa, #2563eb)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Forgot Password
          </h3>
          <p style={{ fontSize: "0.9rem", opacity: 0.7 }}>
            Enter your email to reset your password
          </p>
        </div>

        {message && (
          <div className="alert alert-success py-2 px-3" style={{ borderRadius: "10px", fontSize: "0.85rem" }}>
            {message}
          </div>
        )}
        {error && (
          <div className="alert alert-danger py-2 px-3" style={{ borderRadius: "10px", fontSize: "0.85rem" }}>
            {error}
          </div>
        )}

        <form onSubmit={handleReset}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ borderRadius: "25px", padding: "10px 16px", border: "none" }}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-100 mb-3"
            style={{
              borderRadius: "25px",
              padding: "10px",
              border: "none",
              background: "linear-gradient(135deg, #2563eb, #60a5fa)",
              color: "white",
              fontWeight: "500",
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading && <span className="spinner-border spinner-border-sm me-2" />}
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        <div className="text-center">
          <small style={{ opacity: 0.7 }}>
            Remember your password?{" "}
            <Link to="/login" style={{ color: "#60a5fa" }}>Sign In</Link>
          </small>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default ForgotPassword;
