import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import th from './th.png'
import './Header.css'

const Head = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar  ">
      <span className="nav-logo">
        <NavLink to="/" > 
        <a><img src={th} height={200} width={400}/></a>

      </NavLink>
        </span>
      <div className={`nav-items ${isOpen && "open"}`} id="move">
      <NavLink to="/Home">
        Home</NavLink>
      <NavLink to="/About">About</NavLink>
      <NavLink to="/Products">Products</NavLink>
      <NavLink to="/Login">Login</NavLink>

      </div>
     
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Head;
