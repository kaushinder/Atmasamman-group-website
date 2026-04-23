import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      console.error("Logout error:", err);
    } finally {
      setLoggingOut(false);
    }
  };

  return (
    <div className="nav-wrapper py-3">
      <div className="container">
        <div className="row align-items-center">
          {/* LOGO */}
          <div className="col-lg-3 text-center mb-3 mb-lg-4">
            <Link to="/" className="logo-link">
              <img
                src="assets/images/as.jpeg"
                alt="Logo"
                className="logo-img"
              />
            </Link>
          </div>

          {/* NAV CARDS */}
          <div className="col-lg-9">
            <div className="row g-3">
              {/* ===== ATS ===== */}
              <div className="col-6 col-md-3 ats-wrapper">
                <a
                  href="https://ats-tech-services.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-card"
                >
                  <div className="icon">
                    <i className="fa-solid fa-laptop"></i>
                  </div>
                  <h6>ATS</h6>
                  <p>Tech Services</p>
                </a>

                <div className="ats-mega">
                  <div className="ats-mega-left">
                    <h5>ATS Tech Services</h5>
                    <p className="small">
                      Complete IT solutions for modern businesses.
                    </p>

                    <ul className="ats-features">
                      <li>✔ MERN Stack Development</li>
                      <li>✔ AI & Automation</li>
                      <li>✔ Cloud & APIs</li>
                      <li>✔ Scalable Systems</li>
                    </ul>

                    <Link
                      to="/ATS"
                      className="ats-link"
                      style={{ textDecoration: "underline", color: "black" }}
                    >
                      ATS →
                    </Link>
                    <a
                      href="https://ats-tech-services.vercel.app/"
                      target="_blank"
                      className="ats-link"
                    >
                      Visit Website ↗
                    </a>
                  </div>

                  <div className="ats-mega-image">
                    <img src="assets/images/ecosystem.png" alt="ATS" />
                  </div>
                </div>
              </div>

              {/* ===== ASAI ===== */}
              <div className="col-6 col-md-3 ats-wrapper">
                <a
                  href="https://ats-tech-services.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-card"
                >
                  <div className="icon">
                    <i className="fa-solid fa-robot"></i>
                  </div>
                  <h6>ASAI</h6>
                  <p>AI School</p>
                </a>

                <div className="ats-mega">
                  <div className="ats-mega-left">
                    <h5>ASAI - AI School</h5>
                    <p className="small">Future-ready AI education platform.</p>

                    <ul className="ats-features">
                      <li>✔ Machine Learning</li>
                      <li>✔ Data Science</li>
                      <li>✔ Hands-on Projects</li>
                      <li>✔ Industry Training</li>
                    </ul>

                    <Link to="/ASAI" className="ats-link">
                      Explore →
                    </Link>
                    <a
                      href="https://ats-tech-services.vercel.app/"
                      target="_blank"
                      className="ats-link"
                    >
                      Visit Website ↗
                    </a>
                  </div>

                  <div className="ats-mega-image">
                    <img src="assets/images/ecosystem.png" alt="ASAI" />
                  </div>
                </div>
              </div>

              {/* ===== AIMT ===== */}
              <div className="col-6 col-md-3 ats-wrapper">
                <a
                  href="https://ats-tech-services.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-card"
                >
                  <div className="icon">
                    <i className="fa-solid fa-graduation-cap"></i>
                  </div>
                  <h6>AIMT</h6>
                  <p>Institute</p>
                </a>

                <div className="ats-mega">
                  <div className="ats-mega-left">
                    <h5>AIMT Institute</h5>
                    <p className="small">
                      Professional career-focused education.
                    </p>

                    <ul className="ats-features">
                      <li>✔ Certification Programs</li>
                      <li>✔ Career Guidance</li>
                      <li>✔ Industry Mentorship</li>
                      <li>✔ Placement Support</li>
                    </ul>

                    <Link to="/AIMT" className="ats-link">
                      Explore →
                    </Link>
                    <a
                      href="https://ats-tech-services.vercel.app/"
                      target="_blank"
                      className="ats-link"
                    >
                      Visit Website ↗
                    </a>
                  </div>

                  <div className="ats-mega-image">
                    <img src="assets/images/ecosystem.png" alt="AIMT" />
                  </div>
                </div>
              </div>

              {/* ===== FOUNDATION ===== */}
              <div className="col-6 col-md-3 ats-wrapper">
                <a
                  href="https://ats-tech-services.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-card"
                >
                  <div className="icon">
                    <i className="fa-solid fa-hand-holding-heart"></i>
                  </div>
                  <h6>Foundation</h6>
                  <p>NGO</p>
                </a>

                <div className="ats-mega">
                  <div className="ats-mega-left">
                    <h5>Atmasamman Foundation</h5>
                    <p className="small">
                      Social impact & community development.
                    </p>

                    <ul className="ats-features">
                      <li>✔ Education Initiatives</li>
                      <li>✔ Community Support</li>
                      <li>✔ Skill Development</li>
                      <li>✔ Social Welfare Programs</li>
                    </ul>

                    <Link to="/foundation" className="ats-link">
                      Explore →
                    </Link>
                    <a
                      href="https://ats-tech-services.vercel.app/"
                      target="_blank"
                      className="ats-link"
                    >
                      Visit Website ↗
                    </a>
                  </div>

                  <div className="ats-mega-image">
                    <img src="assets/images/ecosystem.png" alt="Foundation" />
                  </div>
                </div>
              </div>
            </div>

            {/* BOTTOM NAV */}
            <div className="text-center mt-4 d-flex justify-content-center flex-wrap">
              <Link to="/" className="custom-btn m-1">
                Home
              </Link>
              <Link to="/about" className="custom-btn m-1">
                About
              </Link>
              <Link to="/contact" className="custom-btn m-1">
                Contact
              </Link>

              {currentUser ? (
                <>
                  <span className="m-1 text-white small">
                    {currentUser.displayName || currentUser.email}
                  </span>
                  <button onClick={handleLogout} className="custom-btn m-1">
                    {loggingOut ? "..." : "Logout"}
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="custom-btn m-1">
                    Login
                  </Link>
                  <Link to="/SignUp" className="custom-btn m-1">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
