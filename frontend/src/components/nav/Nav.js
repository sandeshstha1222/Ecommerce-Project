import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

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
          <Link to="/signup">
            <button>SIGNUP</button>
          </Link>
          <Link to="/login">
            <button>LOGIN</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
