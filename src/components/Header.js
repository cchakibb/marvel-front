import React from "react";
import logo from "../assets/images/logo.png";
import "../assets/style/header.css";

function Header() {
  return (
    <div className="header">
      <div>
        <img src={logo} alt="Marvel logo" />
      </div>
    </div>
  );
}

export default Header;
