import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <div className="nav-container">
      <div className="logo">SOUNDWAVE</div>
      <ul className="nav-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/instruments">INSTRUMENTS</Link></li>
        <li><Link to="/cart">CART</Link></li>
        <li><Link to="/about">ABOUT US</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navigation;