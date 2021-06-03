import React, { useState } from 'react';
import { FaFacebook, FaGithub, FaHeart, FaInstagram } from 'react-icons/fa';
import SocialButtons from './SocialButtons';

function Footer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    console.log(name, email, message);
  };

  return (
    <div className="footer">
      <div className="container">
        <div className="form">
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <div className="social">
          <h1>Connect with us and never miss out what happens here.</h1>
          <div className="social-btns">
            <SocialButtons>
              <FaGithub size={24} /> <p>Github</p>
            </SocialButtons>
            <SocialButtons>
              <FaFacebook size={24} /> <p>Facebook</p>
            </SocialButtons>
            <SocialButtons>
              <FaInstagram size={24} /> <p>Instagram</p>
            </SocialButtons>
          </div>
        </div>
      </div>
      <div>
        <p className="footnote">
          Made with <FaHeart color="red" size={20} /> by GfG BIT, Sindri
        </p>
      </div>
    </div>
  );
}

export default Footer;
