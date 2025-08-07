import React from "react";
import { Link } from "react-router-dom"; 

function Signup() {
  return (
    <div className="container-fluid bg-light min-vh-100 d-flex flex-column align-items-center pt-5">
      <img
        src="https://zerodha.com/static/images/logo.svg"
        alt="Zerodha Logo"
        style={{ width: "150px", marginBottom: "20px" }}
      />

      <div className="card p-4 shadow-sm" style={{ width: "100%", maxWidth: "400px" }}>
        <h3 className="text-center mb-4">Sign up now</h3>

        <form>
          <div className="mb-3">
            <label htmlFor="mobile" className="form-label">Mobile Number</label>
            <input type="text" className="form-control" id="mobile" placeholder="Your mobile number" />
          </div>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="name" placeholder="Full name" />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" className="form-control" id="email" placeholder="Email address" />
          </div>

          <div className="mb-4">
            <label htmlFor="pan" className="form-label">PAN Number</label>
            <input type="text" className="form-control" id="pan" placeholder="PAN number" />
          </div>

         <Link to="/login" className="btn btn-primary w-100">
  Continue</Link>

        </form>

        <p className="text-center mt-3 text-muted">
          Already have an account? <Link to="/login">Login</Link> {/* 👈 Works now */}
        </p>
      </div>
    </div>
  );
}

export default Signup;
