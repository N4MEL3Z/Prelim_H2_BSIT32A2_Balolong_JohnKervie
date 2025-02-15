import React from "react";
import "./Header.css"; // Ensure you have this CSS file for styles

const Header = ({ onAnchorClick }) => {
  return (
    <div className="Nav">
      <div className="Header1-panel">
        <h1 className="Header1">Balolong John Kervie E</h1>
      </div>
      <nav>
        <div className="Nav-Link">
          <a href="#Home" onClick={(e) => onAnchorClick(e, "#Home")}>
            Home
          </a>
          <a href="#About" onClick={(e) => onAnchorClick(e, "#About")}>
            About
          </a>
          <a href="#Contact" onClick={(e) => onAnchorClick(e, "#Contact")}>
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
