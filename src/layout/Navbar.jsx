import React, { useState } from "react";
import "./navbar.scss";
import logo from "../assets/logo.png";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { userData } from "../lib/dummydata";

function Navbar() {
  let navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Listings", link: "/listing" },
    { name: "Contact", link: "/contact" },
  ];

  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  const user = true;

  return (
    <nav>
      {/* Left */}
      <div className="left">
        <NavLink className="logo" to="/">
          <img src={logo} alt="Kimmy Keys logo" />
          <span>
            Kimmy Keys
            <br /> Real Estate
          </span>
        </NavLink>
        {navItems.map((item) => (
          <NavLink key={item.name} to={item.link}>
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* Right */}
      <div className="right">
        {user ? (
          <div className="user">
            <img src={userData.img} alt="User profile pic" />
            <span>{userData.name}</span>
            <NavLink className="profile" to="/profile">
              <div className="notification"> 3</div>
              <span>Profile</span>
            </NavLink>
          </div>
        ) : (
          <>
            <NavLink to="/signin">Sign In</NavLink>
            <NavLink to="/signup" className="register">
              Sign Up
            </NavLink>
          </>
        )}

        {/* Humberger Menu for Mobile View */}
        <div
          className={open ? " menuIcon active" : "menuIcon"}
          onClick={toggleMenu}
        >
          {open ? <IoClose /> : <GiHamburgerMenu />}
        </div>
        {/* menu items */}
        <div className={open ? "menu active" : "menu"}>
          {navItems.map((item) => (
            <NavLink key={item.name} to={item.link}>
              {item.name}
            </NavLink>
          ))}
          <NavLink to="/signin">Sign In</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
