import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-4">Login</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="userid" className="form-label">User ID</label>
            <input type="text" className="form-control" id="userid" placeholder="User ID" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
