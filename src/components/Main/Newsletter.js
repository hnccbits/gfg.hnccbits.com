import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

function Newsletter() {
  const [email, setEmail] = useState('');
  const handleSubmit = () => {
    console.log(email);
  };
  return (
    <div className="newsletter">
      <h4>Want to attend our upcoming events?</h4>
      <div className="form">
        <input
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <button onClick={handleSubmit}>
          <FaArrowRight className="submit" size={20} />
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
