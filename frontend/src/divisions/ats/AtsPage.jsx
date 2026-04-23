import React from "react";
import { Link } from "react-router-dom";

function ATS() {
  return (
    <div className="container py-5">

      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Atmasamman Tech Services (ATS)</h1>
        <p className="text-muted fs-5">
          Delivering innovative IT solutions to help businesses grow in the
          digital era.
        </p>
      </div>

      {/* About Section */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-6 mb-4">
          <img
            src="assets/images/ecosystem.png"
            alt="ATS"
            className="img-fluid"
          />
        </div>

        <div className="col-lg-6">
          <h3 className="fw-bold mb-3">About ATS</h3>
          <p className="text-muted">
            Atmasamman Tech Services (ATS) is the technology wing of Atmasamman
            Group, focused on delivering high-quality IT solutions for startups,
            businesses, and individuals.
          </p>
          <p className="text-muted">
            We specialize in building scalable applications, modern websites,
            and AI-driven systems to solve real-world problems.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="mb-5">
        <h3 className="fw-bold text-center mb-4">Our Services</h3>

        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <div className="p-4 border rounded shadow-sm h-100">
              <h5 className="fw-bold">Web Development</h5>
              <p className="text-muted">
                Responsive and modern websites using React, Node.js, and latest
                technologies.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="p-4 border rounded shadow-sm h-100">
              <h5 className="fw-bold">AI Solutions</h5>
              <p className="text-muted">
                Smart AI-based applications including chatbots, automation, and
                analytics.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="p-4 border rounded shadow-sm h-100">
              <h5 className="fw-bold">App Development</h5>
              <p className="text-muted">
                Build scalable mobile and web applications tailored to your
                needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="mb-5">
        <h3 className="fw-bold text-center mb-4">Our Process</h3>

        <div className="row text-center">
          <div className="col-md-3 mb-3">
            <p>✔ Requirement Analysis</p>
          </div>
          <div className="col-md-3 mb-3">
            <p>✔ Design & Development</p>
          </div>
          <div className="col-md-3 mb-3">
            <p>✔ Testing & Deployment</p>
          </div>
          <div className="col-md-3 mb-3">
            <p>✔ Support & Maintenance</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-5">
        <h3 className="fw-bold text-center mb-4">Why Choose ATS?</h3>

        <div className="row text-center">
          <div className="col-md-3 mb-3">
            <p>✔ Skilled developers</p>
          </div>
          <div className="col-md-3 mb-3">
            <p>✔ Affordable solutions</p>
          </div>
          <div className="col-md-3 mb-3">
            <p>✔ On-time delivery</p>
          </div>
          <div className="col-md-3 mb-3">
            <p>✔ Client-focused approach</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-5">
        <h3 className="fw-bold mb-3">
          Let’s Build Something Amazing Together
        </h3>

        <p className="text-muted mb-4">
          Get in touch with our team to start your project today.
        </p>

        <Link to="/contact" className="btn btn-primary px-4 py-2 fs-5">
          Contact Us
        </Link>
      </div>

    </div>
  );
}

export default ATS;