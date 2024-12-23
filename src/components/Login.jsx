import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import '../css/loginsignup.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // login functionality
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post('http://localhost:5050/api/users/login', {
        email,
        password,
      });

      console.log("Response from backend:", response.data);
      if (response.status === 200) {
        setSuccessMessage("Signup successful! Redirecting to login...");
        setTimeout(() => {
          navigate('/');
        }, 2000);
        localStorage.setItem('name',response.data.username)
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
        <h2>Login</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
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
          Login
        </button>
        <p>
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
