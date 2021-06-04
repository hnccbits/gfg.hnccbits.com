import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

function Newsletter() {
  const [email, setEmail] = useState('');

  return (
    <div className="newsletter">
      <h4>Want to attend our upcoming events?</h4>
      <div className="form">
        <form name="newsletter" method="post">
          <input type="hidden" value="newsletter" name="form-name" />
          <input
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
          />
          <button type="submit">
            <FaArrowRight className="submit" size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
