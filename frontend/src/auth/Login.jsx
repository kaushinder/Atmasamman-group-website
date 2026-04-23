import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { login, googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(getFirebaseError(err.code));
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setError("");
    setGoogleLoading(true);
    try {
      await googleLogin();
      navigate(from, { replace: true });
    } catch (err) {
      setError(getFirebaseError(err.code));
    } finally {
      setGoogleLoading(false);
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
            Atmasamman
          </h3>
          <p style={{ fontSize: "0.9rem", opacity: 0.7 }}>Sign in to continue</p>
        </div>

        {error && (
          <div
            className="alert alert-danger py-2 px-3"
            style={{ borderRadius: "10px", fontSize: "0.85rem" }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ borderRadius: "25px", padding: "10px 16px", border: "none" }}
            />
          </div>
          <div className="mb-2">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ borderRadius: "25px", padding: "10px 16px", border: "none" }}
            />
          </div>
          <div className="text-end mb-3">
            <Link
              to="/forgotPassword"
              style={{ fontSize: "0.8rem", color: "#60a5fa", textDecoration: "none" }}
            >
              Forgot Password?
            </Link>
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
            {loading && (
              <span className="spinner-border spinner-border-sm me-2" role="status" />
            )}
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="text-center my-3">
          <span style={{ opacity: 0.6, fontSize: "0.8rem" }}>OR</span>
        </div>

        <button
          onClick={handleGoogle}
          disabled={googleLoading}
          className="w-100 d-flex align-items-center justify-content-center gap-2"
          style={{
            borderRadius: "25px",
            padding: "10px",
            border: "1px solid rgba(255,255,255,0.3)",
            background: "transparent",
            color: "white",
            cursor: googleLoading ? "not-allowed" : "pointer",
            opacity: googleLoading ? 0.7 : 1,
          }}
        >
          {googleLoading ? (
            <span className="spinner-border spinner-border-sm" role="status" />
          ) : (
            <img
              src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
              alt="google"
              width="18"
            />
          )}
          {googleLoading ? "Connecting..." : "Continue with Google"}
        </button>

        <div className="text-center mt-4">
          <small style={{ opacity: 0.7 }}>
            Don't have an account?{" "}
            <Link to="/SignUp" style={{ color: "#60a5fa" }}>
              Sign up
            </Link>
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

function getFirebaseError(code) {
  const map = {
    "auth/user-not-found":     "No account found with this email.",
    "auth/wrong-password":     "Incorrect password. Please try again.",
    "auth/invalid-email":      "Please enter a valid email address.",
    "auth/too-many-requests":  "Too many attempts. Please try again later.",
    "auth/invalid-credential": "Invalid email or password.",
    "auth/popup-closed-by-user": "Google sign-in was cancelled.",
  };
  return map[code] || "Something went wrong. Please try again.";
}

export default Login;
