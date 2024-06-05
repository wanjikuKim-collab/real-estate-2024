import React, { useState } from 'react'
import './navbar.scss'
import logo from '../assets/logo.png'

import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

function Navbar() {
  let navItems = [
    {name:"Home", link: "/"},
    {name:"About", link: "/about"},
    {name:"Listings", link: "/listing"},
    {name:"Contact", link: "/contact"}
  ]

  const [open, setOpen] = useState(false);

  const toggleMenu = () =>{
    setOpen(!open)
  };

  return (
    <nav>
        <div className="left">
          <a className='logo' href="/">
            <img src={logo} alt='Kimmy Keys logo'/>
            <span>Kimmy Keys<br /> Real Estate</span>
          </a>
          {
            navItems.map((item)=><a key={item.name} href={item.link}>{item.name}</a>
            )
          }
        </div>
        <div className="right">
          <a href="/signin">Sign In</a>
          <a href="/signup" className="register">Sign Up</a>
              
              {/* Humberger Menu for Mobile View */}
          <div className = {open? " menuIcon active" : "menuIcon"} onClick={toggleMenu}>
           {
              open ? <IoClose/> : <GiHamburgerMenu />
           } 
          </div>
          {/* menu items */}
          <div className={open ? "menu active" : "menu"}>
          {
            navItems.map((item)=><a key={item.name} href={item.link}>{item.name}</a>
            )
          }
          <a href="/signin">Sign In</a>
          <a href="/signup">Sign Up</a>          

          </div>
        </div>
    </nav>
    )
}

export default Navbar