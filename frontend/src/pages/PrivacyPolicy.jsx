import React from "react";

function PrivacyPolicy() {
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
          
          {/* Heading */}
          <h1
            className="fw-bold mb-4 text-center"
            style={{
              color: "#1e293b",
            }}
          >
            Privacy Policy
          </h1>

          <p className="text-muted text-center mb-4">
            Last updated: 2026
          </p>

          {/* Section */}
          <div className="mb-4">
            <h4 style={{ color: "#2563eb" }}>Information We Collect</h4>
            <p style={{ color: "#475569" }}>
              We may collect personal information such as your name, email
              address, and contact details when you interact with our platform.
            </p>
          </div>

          {/* Section */}
          <div className="mb-4">
            <h4 style={{ color: "#2563eb" }}>How We Use Information</h4>
            <p style={{ color: "#475569" }}>
              Your data helps us improve services, communicate updates, and
              provide a better user experience across our platform.
            </p>
          </div>

          {/* Section */}
          <div className="mb-4">
            <h4 style={{ color: "#2563eb" }}>Data Security</h4>
            <p style={{ color: "#475569" }}>
              We use modern security practices to protect your personal
              information from unauthorized access or misuse.
            </p>
          </div>

          {/* Section */}
          <div className="mb-4">
            <h4 style={{ color: "#2563eb" }}>User Rights</h4>
            <p style={{ color: "#475569" }}>
              You have the right to access, update, or delete your personal data
              at any time by contacting us.
            </p>
          </div>

          {/* Section */}
          <div>
            <h4 style={{ color: "#2563eb" }}>Contact Us</h4>
            <p style={{ color: "#475569" }}>
              If you have any questions regarding this privacy policy, feel free
              to contact us through our official website.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;