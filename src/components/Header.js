import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "../assets/style/header.css";

function Header() {
  return (
    <div className="header">
      <div>
        <img src={logo} alt="Marvel logo" />
      </div>
      <nav>
        <Link to="/characters">
          <div>Characters</div>
        </Link>
        <Link to="/comics">
          <div>Comics</div>
        </Link>
        <Link to="/favorites">
          <div>Favorites</div>
        </Link>
      </nav>
    </div>
  );
}

export default Header;
