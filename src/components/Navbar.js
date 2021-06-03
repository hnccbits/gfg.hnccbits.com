import React from 'react';
import logo from '../assets/images/gfg.png';
import NavbarItems from './NavbarItems';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaInstagramSquare,
} from 'react-icons/fa';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="GfG" />
      </div>
      <div className="navbar-items-container">
        <NavbarItems className="head-item">Geeks:</NavbarItems>
        <NavbarItems>Home</NavbarItems>
        <NavbarItems>Team</NavbarItems>
        <NavbarItems>
          <FaGithub size={18} />
        </NavbarItems>
        <NavbarItems>
          <FaInstagram size={18} />
        </NavbarItems>
      </div>
    </div>
  );
}

export default Navbar;
