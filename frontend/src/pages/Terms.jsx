import React from "react";

function Terms() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #f8fafc, #e2e8f0)",
        minHeight: "100vh",
        padding: "50px 0",
      }}
    >
      <div className="container">

        {/* Card */}
        <div
          style={{
            background: "white",
            borderRadius: "15px",
            padding: "40px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          }}
        >
          <h1 className="fw-bold text-center mb-4" style={{ color: "#1e293b" }}>
            Terms & Conditions
          </h1>

          <p className="text-center text-muted mb-4">
            Please read these terms carefully before using our platform.
          </p>

          {/* Section */}
          <div className="mb-4">
            <h4 style={{ color: "#2563eb" }}>Usage</h4>
            <p style={{ color: "#475569" }}>
              Users must use the platform responsibly and must not engage in
              illegal or harmful activities.
            </p>
          </div>

          {/* Section */}
          <div className="mb-4">
            <h4 style={{ color: "#2563eb" }}>Services</h4>
            <p style={{ color: "#475569" }}>
              We reserve the right to modify, suspend, or discontinue any
              service without prior notice.
            </p>
          </div>

          {/* Section */}
          <div className="mb-4">
            <h4 style={{ color: "#2563eb" }}>User Responsibility</h4>
            <p style={{ color: "#475569" }}>
              You are responsible for maintaining the confidentiality of your
              account and personal data.
            </p>
          </div>

          {/* Section */}
          <div>
            <h4 style={{ color: "#2563eb" }}>Liability</h4>
            <p style={{ color: "#475569" }}>
              Atmasamman Group will not be liable for any direct or indirect
              damages resulting from the use of this platform.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Terms;