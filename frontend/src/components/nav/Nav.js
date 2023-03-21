import React from 'react';
import './nav.css';

function Nav() {
  return (
    <div className="nav">
      <div className="logo">
        <img src="" alt="logo" />
      </div>
      <div className="menu">
        <div className="menuList">
          <span>Home</span>
          <span>Brand</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      </div>
    </div>
  );
}

export default Nav;
