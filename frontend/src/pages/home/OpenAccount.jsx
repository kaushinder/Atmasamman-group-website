import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container py-5 mb-5">
      <div className="row justify-content-center text-center">

        <div className="col-lg-8">
          <h1 className="fw-bold mb-3">
            Start Your Journey with Atmasamman Group
          </h1>

          <p className="text-muted fs-5 mb-4">
            Explore opportunities in AI, IT services, and career-focused education.
            Build your skills, work on real projects, and grow in the digital world.
          </p>

          <Link to="/contact" className="btn btn-primary px-4 py-2 fs-5">
          Contact Us
        </Link>
        </div>

      </div>
    </div>
  );
}

export default OpenAccount;