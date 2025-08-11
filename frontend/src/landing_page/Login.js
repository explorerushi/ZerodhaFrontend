import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-4">Login</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="userid" className="form-label">Email Id</label>
            <input type="text" className="form-control" id="Email" placeholder="User ID" />
          </div>

          {/* Password with Show/Hide */}
          <div className="mb-4 position-relative">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="password"
              placeholder="Password"
            />
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary position-absolute"
              style={{ right: "10px", top: "36px" }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button
            type="button"
            className="btn btn-primary w-100"
            onClick={() => window.location.href = "https://zerodha-dashboard-gamma-three.vercel.app/"}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;


