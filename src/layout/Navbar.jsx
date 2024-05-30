import React from 'react'
import './navbar.scss'
import logo from '../assets/logo.png'

function Navbar() {
  let navItems = [
    {name:"Home", link: "/"},
    {name:"About", link: "/"},
    {name:"Listings", link: "/"},
    {name:"Contact", link: "/"}
  ]
  return (
    <nav>
        <div className="left">
          <a className='logo' href="/">
            <img src={logo} alt='Kimmy Keys logo'/>
            <span>Kimmy Keys<br /> Real Estate</span>
          </a>
          <ul>
          {
            navItems.map((item)=><li key={item.name}><a href={item.link}>{item.name}</a></li>
            )
          }
          </ul>
        </div>
        <div className="right">
          <a href="/signin">Sign In</a>
          <a href="/signup" className="register">Sign Up</a>
        </div>
    </nav>
    )
}

export default Navbar