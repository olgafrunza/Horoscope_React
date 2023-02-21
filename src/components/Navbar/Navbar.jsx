import React from "react";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://harveycla.github.io/horoscope/static/media/logo.d6c42622bddf5a8e7575.png"
          alt="imageLogo"
        />
      </div>
      <div className="link">
        <a href="#">HOROSCOPES</a>
        <a href="#">DAILY</a>
        <a href="#">TAROT</a>
        <a href="#">ARTICLES</a>
        <a href="#">CONTACT</a>
      </div>
    </div>
  );
}

export default Navbar;
