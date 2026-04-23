import React from "react";

function Pricing() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

        {/* Left Content */}
        <div className="col-lg-5 mb-4">
          <h1 className="fw-bold mb-3">Affordable Learning & Services</h1>
          <p className="text-muted">
            Atmasamman Group provides high-quality IT services and career-focused
            education at affordable pricing, making technology accessible for everyone.
          </p>

          <a
            href="/contact"
            className="text-primary text-decoration-none fw-semibold"
          >
            Get Started <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

        {/* Right Cards */}
        <div className="col-lg-7">
          <div className="row text-center">

            {/* Free Learning */}
            <div className="col-md-6 mb-3">
              <div className="p-4 border rounded shadow-sm h-100">
                <h2 className="mb-2 text-primary">Free</h2>
                <p className="text-muted">
                  Basic learning resources, workshops, and community support
                  to kickstart your journey.
                </p>
              </div>
            </div>

            {/* Premium */}
            <div className="col-md-6 mb-3">
              <div className="p-4 border rounded shadow-sm h-100">
                <h2 className="mb-2 text-primary">Premium</h2>
                <p className="text-muted">
                  Advanced courses, AI training, real-world projects, and
                  career guidance for professional growth.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;