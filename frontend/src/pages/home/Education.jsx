import React from "react";

function Education() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

        {/* Image */}
        <div className="col-lg-6 text-center mb-4">
          <img
            src="assets/images/growth.webp"
            alt="Education"
            className="img-fluid"
            style={{ maxWidth: "80%", borderRadius: "10px", height: "auto" }}
          />
        </div>

        {/* Content */}
        <div className="col-lg-6">
          <h1 className="fw-bold mb-3">
            Learn<span className="text-danger">.</span> Build<span className="text-danger">.</span> Grow<span className="text-danger">.</span> with Atmasamman
          </h1>

          <p className="text-muted">
            Atmasamman Group provides career-oriented education in AI, web
            development, and modern technologies. Our goal is to help students
            gain practical skills and become industry-ready.
          </p>

          <a
            href="/ASAI"
            className="text-primary text-decoration-none fw-semibold"
          >
            Explore AI Programs <i className="fa-solid fa-arrow-right-long"></i>
          </a>

          <p className="mt-4 text-muted">
            We focus on hands-on learning through real-world projects, mentorship,
            and guidance to help you build a strong portfolio and career path.
          </p>

          <a
            href="/AIMT"
            className="text-primary text-decoration-none fw-semibold"
          >
            Explore Courses <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Education;