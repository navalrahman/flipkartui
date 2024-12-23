import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/loginsignup.css";
import axios from "axios";

const Signup = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post('http://localhost:5050/api/users/signup', {
        username,
        email,
        password,
      });

      console.log("Response from backend:", response.data);
      if (response.status === 201) {
        setSuccessMessage("Signup successful! Redirecting to login...");
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setErrorMessage(response.data.message || "Something went wrong.");
      }
    } catch (error) {
      if (error.response) {
        console.error("Error response from backend:", error.response.data);
        setErrorMessage(error.response.data.message || "Signup failed. Please try again.");
      } else if (error.request) {
        console.error("No response from backend:", error.request);
        setErrorMessage("No response from the server. Please try again later.");
      } else {
        console.error("Error during signup:", error.message);
        setErrorMessage("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Signup</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            required
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="auth-button">
          Signup
        </button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
