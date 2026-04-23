import React from "react";

function Team() {
  return (
    <div className="container">
      
      {/* Heading */}
      <div className="row border-top p-3 mt-4">
        <h1 className="mt-5 text-center fw-bold">Our Leadership</h1>
      </div>

      {/* Content */}
      <div
        className="row p-3 align-items-center"
        style={{ lineHeight: "1.8", fontSize: "1.1rem" }}
      >
        
        {/* Image Section */}
        <div className="col-md-5 text-center">
          <img
            src="assets/images/founder.jpg"
            alt="Founder"
            className="img-fluid rounded-circle mb-3 shadow"
            style={{ width: "250px", height: "250px", objectFit: "cover" }}
          />
          <h4 className="mt-3 fw-bold">Pankaj Sir</h4>
          <h6 className="text-primary">Founder & CEO</h6>
        </div>

        {/* Text Section */}
        <div className="col-md-7">
          <p>
            Pankaj Sir is the visionary behind Atmasamman Group, leading the
            organization with a mission to empower individuals through
            technology, education, and innovation. His goal is to create a
            platform where talent meets opportunity in the digital world.
          </p>

          <p>
            Under his leadership, Atmasamman Group has expanded into IT
            services, AI-driven solutions, and career-oriented education,
            helping students and professionals grow with real-world skills.
          </p>

          <p>
            He strongly believes in building a socially impactful ecosystem
            where technology is not just a tool, but a bridge to transform lives.
          </p>

          <p>
            Connect on{" "}
            <a
              href="/"
              style={{ textDecoration: "none" }}
              className="text-primary"
            >
              Homepage
            </a>{" "}
            /{" "}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              LinkedIn
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Team;