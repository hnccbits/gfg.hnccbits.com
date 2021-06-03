import React from 'react';

function SocialButtons({ children, link = '' }) {
  return (
    <div className="social-button">
      <a href={link}>{children}</a>
    </div>
  );
}

export default SocialButtons;
