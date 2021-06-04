import React from 'react';
import HnCC from '../assets/images/HnCC.svg';
import GfGBits from '../assets/images/gfg-bits-logo.png';
import { IoIosMail } from 'react-icons/io';

function AboutUs() {
  return (
    <div className="about">
      <div className="details-container">
        <div className="details">
          <h2>About Us</h2>
          <p>
            GeeksforGeeks Student Chapters are university based community
            chapters for student interested in Computer Science and other core
            technical competences.
            <br />
            <br />
            <span style={{ color: 'rgb(107, 114, 128)' }}>
              Team Size: 8 members
            </span>
          </p>
        </div>
        <div className="logo">
          <img src={GfGBits} alt="GfG-Bits" />
        </div>
      </div>
      <div className="extra-detail">
        <span>Visit us at:</span>
        <br />
        <span>Birsa Institute of Technology, Sindri</span>
        <br />
        <span>Dhanbad - 828123</span>
        <br />
        <span>Jharkhand, India</span>
        <br />
        <span
          style={{ display: 'flex', alignItems: 'center', marginTop: '2rem' }}
        >
          <IoIosMail size={32} />:
          <a
            href="mailto:gfgbitsindri@gmail.com"
            style={{ marginLeft: '1rem' }}
          >
            gfgbitsindri@gmail.com
          </a>
        </span>
      </div>
      <div className="associations">
        <h1> In association with </h1>
        <div className="logos">
          <img src={HnCC} alt="HnCC" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
