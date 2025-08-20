import React from "react";
import { Link } from "react-router-dom";
import "../Styles/logsignup.css"; 

const Signup = () => (
  <div className="form-container">
    <h2>Sign Up</h2>
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="text" placeholder="Full Name" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <input type="password" placeholder="Confirm Password" required />
      <button type="submit">Sign Up</button>
    </form>
    <p>
      Already have an account? <Link to="/login">Log In</Link>
    </p>
  </div>
);

export default Signup;
