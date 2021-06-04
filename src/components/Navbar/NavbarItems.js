import React from 'react';
import { Link } from 'react-router-dom';

function NavbarItems({ children, link, className = '' }) {
  return (
    <Link className={`navbar-items ${className}`} to={link}>
      <div>{children}</div>
    </Link>
  );
}

export default NavbarItems;
