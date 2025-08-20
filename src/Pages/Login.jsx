import React from "react";
import { Link } from "react-router-dom";
import "../Styles/logsignup.css";

const Login = () => {
  return (
    <div className="form-container">
      <h2>Log In</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Log In</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
