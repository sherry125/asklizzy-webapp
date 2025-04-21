import React from 'react';
import logo from '../images/asklizzy-logo.png';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="AskLizzy Logo" className="header-logo" />
    </header>
  );
}

export default Header;