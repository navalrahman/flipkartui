import React, { useState } from 'react';
import '../css/Navbar.css';



const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
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
          <span className="login">Login </span>
          {isDropdownVisible && (
            <ul className="dropdown-menu">
              <li>New Customer? <span>Signup</span></li>
              <li>My Profile</li>
              <li>Orders</li>
              <li>Wishlist</li>
              <li>Rewards</li>
              <li>Gift Cards</li>
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
