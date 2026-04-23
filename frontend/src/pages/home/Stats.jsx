import React from "react";

function Stats() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

        {/* Left Content */}
        <div className="col-lg-6 mb-4">
          <h1 className="fw-bold mb-4">Why Choose Atmasamman Group</h1>

          <h5 className="fw-semibold">Technology-first approach</h5>
          <p className="text-muted">
            We leverage modern technologies like AI, web development, and data
            science to build real-world solutions and empower learners.
          </p>

          <h5 className="fw-semibold">Career-focused learning</h5>
          <p className="text-muted">
            Our programs are designed to help students gain practical skills,
            build projects, and become job-ready in today’s digital world.
          </p>

          <h5 className="fw-semibold">Complete ecosystem</h5>
          <p className="text-muted">
            From learning to implementation, we provide an ecosystem where
            individuals can learn, build, and apply their knowledge effectively.
          </p>

          <h5 className="fw-semibold">Social impact driven</h5>
          <p className="text-muted">
            Through Atmasamman Foundation, we aim to create opportunities and
            make education and technology accessible for everyone.
          </p>
        </div>

        {/* Right Image + Links */}
        <div className="col-lg-6 text-center">
          <img
            src="assets/images/ecosystem.png"
            alt="Ecosystem"
            className="img-fluid mb-4"
            style={{ maxWidth: "120%" }}
          />

          <div>
            <a
              href="/foundation"
              className="mx-3 text-primary text-decoration-none fw-semibold"
            >
              Explore Foundation <i className="fa-solid fa-arrow-right-long"></i>
            </a>

            <a
              href="/contact"
              className="mx-3 text-primary text-decoration-none fw-semibold"
            >
              Get Started <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Stats;