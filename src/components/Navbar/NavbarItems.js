import React from 'react';

function NavbarItems({ children, link, className = '' }) {
  return (
    <div className={`navbar-items ${className}`}>
      <a href={link}>{children}</a>
    </div>
  );
}

export default NavbarItems;
