import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const name = localStorage.getItem('name'); 
    const navigate = useNavigate();

  useEffect(() => {
    if (name) {
      setIsLoggedIn(true); 
    } else {
      setIsLoggedIn(false); 
    }
  }, [name]); 

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleProfile = () => {

  };

  const handleLogout = () => {
    localStorage.removeItem('name');
    setIsLoggedIn(false); 
  };

  return (
    <div className="navbar">
      <div className="logo">Flipkart</div>
      <input
        className="search-bar"
        type="text"
        placeholder="Search for Products, Brands and More"
      />
      <div className="nav-links">
        <div
          className="login-dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="login">
            {isLoggedIn ? name : 'Login'} 
          </span>
          {isDropdownVisible && (
            <ul className="dropdown-menu">
              {!isLoggedIn ? (
                <>
                  <li onClick={handleSignup}>
                    New Customer? <span>Signup</span>
                  </li>
                  <li onClick={handleLogin}>Login</li>
                </>
              ) : (
                <>
                  <li onClick={handleProfile}>My Profile</li>
                  <li>Orders</li>
                  <li>Wishlist</li>
                  <li>Rewards</li>
                  <li>Gift Cards</li>
                  <li onClick={handleLogout}>Logout</li>
                </>
              )}
            </ul>
          )}
        </div>
        <span>Cart</span>
        <span>Become a Seller</span>
      </div>
    </div>
  );
};

export default Navbar;
