import React from "react";
import { Link } from "react-router-dom";

function Foundation() {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Atmasamman Foundation</h1>
        <p className="text-muted fs-5">
          Empowering lives through education, technology, and social impact.
        </p>
      </div>

      {/* About Section */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-6 mb-4">
          <img
            src="assets/images/foundation.jpg"
            alt="Foundation"
            className="img-fluid"
            style={{ width: "400px", height: "200px", borderRadius: "10px" }}
          />
        </div>

        <div className="col-lg-6">
          <h3 className="fw-bold mb-3">About the Foundation</h3>
          <p className="text-muted">
            Atmasamman Foundation is the social initiative of Atmasamman Group,
            focused on creating opportunities for individuals through education,
            skill development, and technology access.
          </p>

          <p className="text-muted">
            Our mission is to support students, empower communities, and bridge
            the gap between knowledge and opportunity, especially for those who
            need it the most.
          </p>
        </div>
      </div>

      {/* Focus Areas */}
      <div className="mb-5">
        <h3 className="fw-bold text-center mb-4">Our Focus Areas</h3>

        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <div className="p-4 border rounded shadow-sm h-100">
              <h5 className="fw-bold">Education Support</h5>
              <p className="text-muted">
                Providing learning resources, mentorship, and guidance to
                students.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="p-4 border rounded shadow-sm h-100">
              <h5 className="fw-bold">Skill Development</h5>
              <p className="text-muted">
                Training programs to help individuals build job-ready skills.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="p-4 border rounded shadow-sm h-100">
              <h5 className="fw-bold">Social Impact</h5>
              <p className="text-muted">
                Initiatives aimed at uplifting communities and creating
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mb-5 text-center">
        <h3 className="fw-bold mb-3">Our Mission</h3>
        <p className="text-muted fs-5">
          To create an inclusive ecosystem where education, technology, and
          opportunity are accessible to everyone, enabling individuals to grow
          and succeed.
        </p>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-5">
        <h3 className="fw-bold mb-3">Be a Part of the Change</h3>

        <p className="text-muted mb-4">
          Join us in making a difference. Together, we can empower lives and
          build a better future.
        </p>

        <Link to="/getInvolved" className="btn btn-primary px-4 py-2 fs-5">
          Get Involved
        </Link>
      </div>
    </div>
  );
}

export default Foundation;
