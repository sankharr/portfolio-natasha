// packages
import React from "react";
import styled from "styled-components";

// styling
import "./Header.scss";
import { FaLinkedin, FaTwitter } from 'react-icons/fa'

// navitems array
const navItems = ["porfolio", "about me", "my blog", "reviews", "contact me"];


function Header() {
  return (
    <div className="Header">
      <div className="Header__logo">natasha.</div>
      <div className="Header__navItemsSection">
        {navItems.map((item) => (
          <button key={item} className="Header__navButton">{item}</button>
        ))}
      </div>
      <div className="Header__socialSection">
        <FaTwitter className="Header__socialIcon"/>
        <FaLinkedin className="Header__socialIcon"/>
      </div>
    </div>
  );
}

export default Header;
