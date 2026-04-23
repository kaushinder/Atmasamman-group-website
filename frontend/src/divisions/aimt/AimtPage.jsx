import React from "react";
import { Link } from "react-router-dom";

function AIMT() {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">
          Atmasamman Institute of Management & Technology (AIMT)
        </h1>
        <p className="text-muted fs-5">
          Empowering students with industry-ready skills in technology,
          management, and innovation.
        </p>
      </div>

      {/* About Section */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-6 mb-4">
          <img
            src="assets/images/master.webp"
            alt="AIMT"
            className="img-fluid"
            style={{ width: "400px", height: "300px", borderRadius: "10px" }}
          />
        </div>

        <div className="col-lg-6">
          <h3 className="fw-bold mb-3">About AIMT</h3>
          <p className="text-muted">
            AIMT is a part of Atmasamman Group focused on delivering
            career-oriented education in technology and management.
          </p>
          <p className="text-muted">
            We provide hands-on learning, real projects, mentorship, and
            technical exposure to help students become job-ready professionals.
          </p>
        </div>
      </div>

      {/* Programs Section */}
      <div className="mb-5">
        <h3 className="fw-bold text-center mb-4">Our Programs</h3>

        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <div className="p-4 border rounded shadow-sm h-100">
              <h5 className="fw-bold">Web Development</h5>
              <p className="text-muted">
                Learn frontend & backend development with real-world projects.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="p-4 border rounded shadow-sm h-100">
              <h5 className="fw-bold">Artificial Intelligence</h5>
              <p className="text-muted">
                Master AI, machine learning, and data science concepts.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="p-4 border rounded shadow-sm h-100">
              <h5 className="fw-bold">Management & Soft Skills</h5>
              <p className="text-muted">
                Build leadership, communication, and career skills.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* NEW Tech Support Section 🔥 */}
      <div className="mb-5">
        <h3 className="fw-bold text-center mb-4">Tech Support & Services</h3>

        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <div className="p-4 border rounded shadow-sm h-100">
              <h5 className="fw-bold">IT Support</h5>
              <p className="text-muted">
                Assistance with software, systems, and troubleshooting for
                smooth operations.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="p-4 border rounded shadow-sm h-100">
              <h5 className="fw-bold">Project Guidance</h5>
              <p className="text-muted">
                Expert help in building academic and real-world technical
                projects.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="p-4 border rounded shadow-sm h-100">
              <h5 className="fw-bold">Internship Support</h5>
              <p className="text-muted">
                Guidance and opportunities to gain real industry experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-5">
        <h3 className="fw-bold text-center mb-4">Why AIMT?</h3>

        <div className="row text-center">
          <div className="col-md-3 mb-3">
            <p>✔ Industry-focused curriculum</p>
          </div>
          <div className="col-md-3 mb-3">
            <p>✔ Hands-on project experience</p>
          </div>
          <div className="col-md-3 mb-3">
            <p>✔ Expert mentorship</p>
          </div>
          <div className="col-md-3 mb-3">
            <p>✔ Career guidance & support</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-5">
        <h3 className="fw-bold mb-3">Start Your Learning Journey Today</h3>

        <p className="text-muted mb-4">
          Join AIMT and build the skills needed to succeed in the modern digital
          world.
        </p>

        <Link to="/enroll" className="btn btn-primary">
          Enroll Now
        </Link>
      </div>
    </div>
  );
}

export default AIMT;
