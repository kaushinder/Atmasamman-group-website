import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container-fluid p-0">
      <div
        className="position-relative d-flex align-items-center justify-content-center text-center overflow-hidden"
        style={{ height: "75vh" }}
      >
        {/* Background Image */}
        <img
          src="assets/images/cover.jpg"
          alt="Hero"
          className="w-100 h-100 position-absolute"
          style={{
            objectFit: "cover",
            filter: "brightness(60%)",
          }}
        />

        {/* Gradient Overlay */}
        <div
          className="position-absolute w-100 h-100"
          style={{
            background:
              "linear-gradient(135deg, rgba(15,23,42,0.8), rgba(37,99,235,0.6))",
          }}
        ></div>

        {/* Content */}
        <div
          className="position-relative text-white px-3"
          style={{
            maxWidth: "750px",
            animation: "fadeUp 1s ease-in-out",
          }}
        >
          {/* Heading */}
          <h1
            className="fw-bold mb-3"
            style={{
              fontSize: "2.5rem",
              letterSpacing: "1px",
            }}
          >
            Welcome to{" "}
            <span style={{ color: "#60a5fa" }}>Atmasamman Group</span>
          </h1>

          {/* Description */}
          <p className="mb-2" style={{ fontSize: "1.05rem", opacity: 0.9 }}>
            A technology driven organisation delivering IT services, AI innovation,
            career oriented education, and social impact initiatives.
          </p>

          <p className="mb-4" style={{ fontSize: "1rem", opacity: 0.8 }}>
            Building an ecosystem where technology meets talent in the digital era.
          </p>

          {/* Buttons */}
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link
              to="/contact"
              className="btn px-4 py-2"
              style={{
                background: "linear-gradient(135deg, #2563eb, #60a5fa)",
                border: "none",
                color: "white",
                borderRadius: "30px",
                transition: "0.3s",
              }}
            >
              Contact Us
            </Link>

            <Link
              to="/about"
              className="btn px-4 py-2"
              style={{
                border: "1px solid white",
                color: "white",
                borderRadius: "30px",
                backdropFilter: "blur(5px)",
              }}
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Inline Animation */}
        <style>
          {`
            @keyframes fadeUp {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}
        </style>
      </div>
    </div>
  );
}

export default Hero;