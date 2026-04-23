import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="text-center">
        
        <h1 className="display-1 fw-bold text-danger">404</h1>
        
        <h3 className="mb-3">Page Not Found</h3>
        
        <p className="text-muted mb-4">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        <Link to="/" className="btn btn-primary px-4">
          Go Back Home
        </Link>

      </div>
    </div>
  );
}

export default NotFound;