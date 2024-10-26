

import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/svgs/logo.svg";
import icon from "../../assets/images/icoimage.svg";
import { CiBellOn } from "react-icons/ci";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      {/* Brand Logo */}
      <div className="navbar-logo">
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <p>Brighton Marina Jiu Jitsu Academy</p>
      </div>

      {/* Search Bar */}
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-input" />
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <CiBellOn color="black" size={30} />
        </li>
      </ul>
      {/* Profile Dropdown */}
      <div className="profile-container">
        <img
          src={icon}
          alt="profile"
          className="profile-image"
          onClick={toggleDropdown}
        />
        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <ul className="dropdown-menu">
            <li>
              <a href="#profile">Profile</a>
            </li>
            <li>
              <a href="#settings">Settings</a>
            </li>
            <li>
              <a href="#logout">Logout</a>
            </li>
          </ul>
        )}
      </div>

      {/* Mobile Menu Icon */}
      <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? "✖" : "☰"}
      </button>
    </nav>
  );
};

export default Navbar;
