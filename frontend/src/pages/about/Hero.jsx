import React from "react";

function Hero() {
  return (
    <div className="container py-5">

      {/* Top Heading */}
      <div className="row text-center mb-5">
        <div className="col">
          <h1
            className="fw-bold"
            style={{
              fontSize: "2.3rem",
              background: "linear-gradient(135deg, #2563eb, #60a5fa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "fadeDown 1s ease",
            }}
          >
            Driving Innovation through Technology, Education & Social Impact
          </h1>

          {/* Underline */}
          <div
            style={{
              width: "80px",
              height: "4px",
              margin: "15px auto",
              background: "linear-gradient(135deg, #2563eb, #60a5fa)",
              borderRadius: "10px",
            }}
          ></div>
        </div>
      </div>

      {/* Content */}
      <div className="row g-4">

        {/* Left Card */}
        <div className="col-lg-6">
          <div
            className="p-4 h-100"
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "15px",
              backdropFilter: "blur(10px)",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              transition: "0.3s",
              animation: "fadeUp 1s ease",
            }}
          >
            <p>
              Atmasamman Group was founded with a vision to empower individuals
              through technology, innovation, and education. Our goal is to bridge
              the gap between learning and real-world application by creating
              opportunities for students and professionals.
            </p>

            <p>
              We focus on delivering high-quality IT services, AI-driven solutions,
              and career-oriented programs that help individuals build practical
              skills and grow in today’s digital world.
            </p>

            <p>
              Through continuous innovation, we aim to create a platform where
              talent meets opportunity and ideas turn into impactful solutions.
            </p>
          </div>
        </div>

        {/* Right Card */}
        <div className="col-lg-6">
          <div
            className="p-4 h-100"
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "15px",
              backdropFilter: "blur(10px)",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              transition: "0.3s",
              animation: "fadeUp 1.3s ease",
            }}
          >
            <p>
              Our ecosystem includes multiple initiatives such as Atmasamman Tech
              Services (ATS), School of AI Intelligence (ASAI), and Institute of
              Management & Technology (AIMT), each designed to contribute to
              holistic growth.
            </p>

            <p>
              Alongside technology and education, Atmasamman Foundation focuses on
              creating social impact by making knowledge and opportunities
              accessible to all.
            </p>

            <p>
              We are constantly evolving, building new solutions, and helping
              individuals and organizations grow together in the digital era.
            </p>
          </div>
        </div>

      </div>

      {/* Inline Animations */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeDown {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}

export default Hero;