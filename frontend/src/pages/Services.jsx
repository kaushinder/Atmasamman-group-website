import React from "react";

function Services() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #f8fafc, #e2e8f0)",
        minHeight: "100vh",
        padding: "50px 0",
      }}
    >
      <div className="container">

        {/* Card */}
        <div
          style={{
            background: "white",
            borderRadius: "15px",
            padding: "40px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          }}
        >
          <h1 className="fw-bold text-center mb-4" style={{ color: "#1e293b" }}>
            Our Services
          </h1>

          <p className="text-center text-muted mb-5">
            Explore the key services offered by Atmasamman Group
          </p>

          <div className="row">

            {[
              {
                title: "ATS",
                desc: "Technology solutions, web development, and innovative digital services.",
              },
              {
                title: "ASAI",
                desc: "Artificial Intelligence learning, research, and practical implementation.",
              },
              {
                title: "AIMT",
                desc: "Management and technology education programs for future leaders.",
              },
            ].map((service, i) => (
              <div key={i} className="col-md-4 mb-4">
                <div
                  style={{
                    borderRadius: "12px",
                    padding: "25px",
                    background: "#f1f5f9",
                    transition: "0.3s",
                    height: "100%",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 20px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <h5 className="fw-bold mb-2" style={{ color: "#2563eb" }}>
                    {service.title}
                  </h5>
                  <p style={{ color: "#475569" }}>{service.desc}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;