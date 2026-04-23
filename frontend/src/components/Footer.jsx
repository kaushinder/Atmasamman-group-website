import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{
      background: "linear-gradient(135deg, #0f172a, #1e293b)",
      color: "white",
      paddingTop: "30px",
      paddingBottom: "20px",
    }}>
      <div style={{ height: "4px", background: "linear-gradient(to right, #2563eb, #60a5fa)", marginBottom: "20px" }}></div>

      <div className="container-fluid px-4">
        <div className="row">

          <div className="col-12 col-md-3 mb-4 text-center text-md-start">
            <img src="assets/images/logo.jpg" alt="Atmasamman Logo"
              style={{ width: "80px", borderRadius: "50%" }} className="mb-2" />
            <h6 className="fw-bold">Atmasamman Group</h6>
            <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
              Empowering innovation through technology, education &amp; impact.
            </p>
          </div>

          <div className="col-12 col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Services</h5>
            <ul className="list-unstyled">
              {[
                { name: "ATS",        path: "/ATS"        },
                { name: "ASAI",       path: "/ASAI"       },
                { name: "AIMT",       path: "/AIMT"       },
                { name: "Foundation", path: "/foundation" },
              ].map((item, i) => (
                <li key={i} className="mb-2">
                  <Link to={item.path} style={{ color: "#cbd5f5", textDecoration: "none" }}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-12 col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Company</h5>
            <ul className="list-unstyled">
              {[
                { name: "About",        path: "/about"       },
                { name: "Contact",      path: "/contact"     },
                { name: "Career",       path: "/career"      },
                { name: "Blog",         path: "/blog"        },
                { name: "Get Involved", path: "/getInvolved" },
              ].map((item, i) => (
                <li key={i} className="mb-2">
                  <Link to={item.path} style={{ color: "#cbd5f5", textDecoration: "none" }}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-12 col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Legal</h5>
            <ul className="list-unstyled">
              {[
                { name: "Privacy Policy",      path: "/privacyPolicy" },
                { name: "Terms & Conditions",  path: "/terms"         },
                { name: "Services",            path: "/services"      },
              ].map((item, i) => (
                <li key={i} className="mb-2">
                  <Link to={item.path} style={{ color: "#cbd5f5", textDecoration: "none" }}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3">
              <p style={{ fontSize: "0.85rem", opacity: 0.8, marginBottom: "4px" }}>
                <strong>Email:</strong> support.atmasamman@gmail.com
              </p>
              <p style={{ fontSize: "0.85rem", opacity: 0.8 }}>
                <strong>Phone:</strong> +91 7830060800
              </p>
            </div>
          </div>

        </div>

        <div className="text-center mt-3 pt-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)", fontSize: "0.85rem", opacity: 0.7 }}>
          © 2026 Atmasamman Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
