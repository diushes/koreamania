import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/Korea">Korea</NavLink></li>
        <li><NavLink to="/food">Food</NavLink></li>
        <li><NavLink to="/people">People</NavLink></li>
        <li><NavLink to="/culture">Culture</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
