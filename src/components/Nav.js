import React from 'react';
import logo from '../assets/logo.png';

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list--item">Home</li>
        <li><img src={logo} alt="Logo" width={50} /></li>
        <li className="nav__list--item">Log out</li>
      </ul>
    </nav>
  );
};

export default Nav;