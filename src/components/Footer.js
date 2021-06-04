import React, { useState } from 'react';
import { FaGithub, FaHeart, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import SocialButtons from './SocialButtons';

const github = 'https://github.com/GeeksForGeeks-BIT-Sindri/Gfg-BITS-Website';
const instagram = 'https://instagram.com/gfg.hnccbits?utm_medium=copy_link';
const linkedin = 'https://www.linkedin.com/company/geeksforgeeks-bit-sindri';

function Footer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="footer">
      <div className="container">
        <div className="form">
          <form name="contact" method="post">
            <input type="hidden" value="contact" name="form-name" />
            <input
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Message here"
              value={message}
              name="message"
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="social">
          <h1>Connect with us and never miss out what happens here.</h1>
          <h3>
            <IoIosMail />
            <a href="mailto:gfgbitsindri@gmail.com"> gfgbitsindri@gmail.com </a>
          </h3>
          <div className="social-btns">
            <SocialButtons link={github}>
              <FaGithub size={24} /> <p>Github</p>
            </SocialButtons>
            <SocialButtons link={linkedin}>
              <FaLinkedinIn size={24} /> <p>LinkenIn</p>
            </SocialButtons>
            <SocialButtons link={instagram}>
              <FaInstagram size={24} /> <p>Instagram</p>
            </SocialButtons>
          </div>
        </div>
      </div>
      <div>
        <p
          style={{ display: 'flex', alignItems: 'center' }}
          className="footnote"
        >
          Made with <FaHeart size={20} style={{ margin: '0 1rem' }} /> by GfG
          BIT, Sindri
        </p>
      </div>
    </div>
  );
}

export default Footer;
