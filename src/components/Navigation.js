import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <div className="nav-container">
      <div className="logo">SOUNDWAVE</div>
      <ul className="nav-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/instruments">INSTRUMENTS</Link></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </div>
  </nav>
);

export default Navigation;