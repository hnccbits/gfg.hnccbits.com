import React from 'react';
import logo from '../../assets/images/gfg.png';
import NavbarItems from './NavbarItems';
import { FaGithub, FaInstagram } from 'react-icons/fa';

const github = 'https://github.com/GeeksForGeeks-BIT-Sindri/Gfg-BITS-Website';
const instagram = 'https://instagram.com/gfg.hnccbits?utm_medium=copy_link';

function Navbar() {
  return (
    <div
      style={{
        backgroundColor: '#f9fafb',
        top: 0,
        position: 'sticky',
        paddingTop: '1rem',
      }}
    >
      <div className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="GfG" />
        </div>
        <div className="navbar-items-container">
          <NavbarItems link="/" className="head-item">
            Geeks:
          </NavbarItems>
          <NavbarItems link="/home">Home</NavbarItems>
          <NavbarItems link="/team">Team</NavbarItems>
          <NavbarItems link={github}>
            <FaGithub size={18} />
          </NavbarItems>
          <NavbarItems link={instagram}>
            <FaInstagram size={18} />
          </NavbarItems>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
