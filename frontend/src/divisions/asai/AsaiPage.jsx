import React from "react";
import { Link } from "react-router-dom";

function ASAI() {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">
          Atmasamman School of Artificial Intelligence (ASAI)
        </h1>
        <p className="text-muted fs-5">
          Shaping the future with AI, machine learning, and data-driven
          innovation.
        </p>
      </div>

      {/* About Section */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-6 mb-4 text-center">
          <img
            src="assets/images/ASAI.png"
            alt="ASAI"
            style={{
              width: "260px",
              height: "260px",
              objectFit: "cover",
              borderRadius: "50%",
              border: "5px solid #f8f9fa",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            }}
          />
        </div>

        <div className="col-lg-6">
          <h3 className="fw-bold mb-3">About ASAI</h3>
          <p className="text-muted">
            ASAI is the AI-focused initiative of Atmasamman Group, designed to
            equip students with cutting-edge skills in Artificial Intelligence,
            Machine Learning, and Data Science.
          </p>

          <p className="text-muted">
            Our goal is to prepare individuals for the future by combining
            theoretical knowledge with real-world AI applications and projects.
          </p>
        </div>
      </div>

      {/* Programs Section */}
      <div className="mb-5">
        <h3 className="fw-bold text-center mb-4">Our Programs</h3>

        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <div className="p-4 border rounded shadow-sm h-100">
              <h5 className="fw-bold">Machine Learning</h5>
              <p className="text-muted">
                Learn supervised & unsupervised learning with real datasets.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="p-4 border rounded shadow-sm h-100">
              <h5 className="fw-bold">Data Science</h5>
              <p className="text-muted">
                Analyze data, visualize insights, and build predictive models.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="p-4 border rounded shadow-sm h-100">
              <h5 className="fw-bold">AI Projects</h5>
              <p className="text-muted">
                Work on real-world AI applications and build a strong portfolio.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-5">
        <h3 className="fw-bold text-center mb-4">Why ASAI?</h3>

        <div className="row text-center">
          <div className="col-md-3 mb-3">
            <p>✔ Industry-relevant AI curriculum</p>
          </div>

          <div className="col-md-3 mb-3">
            <p>✔ Hands-on project experience</p>
          </div>

          <div className="col-md-3 mb-3">
            <p>✔ Expert mentors in AI & Data Science</p>
          </div>

          <div className="col-md-3 mb-3">
            <p>✔ Career & placement support</p>
          </div>
        </div>
      </div>

      {/* Tools & Technologies */}
      <div className="mb-5 text-center">
        <h3 className="fw-bold mb-3">Tools & Technologies</h3>
        <p className="text-muted">
          Python, TensorFlow, Scikit-learn, Pandas, NumPy, Power BI, and more.
        </p>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-5">
        <h3 className="fw-bold mb-3">Step into the Future with AI</h3>

        <p className="text-muted mb-4">
          Join ASAI and build a career in Artificial Intelligence and Data
          Science.
        </p>

        <Link to="/enroll" className="btn btn-primary">
          Enroll Now
        </Link>
      </div>
    </div>
  );
}

export default ASAI;
