import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "../CSS/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">Katja Stadel --- Peas of Art</div>

      <ul className="navbar-menu">
        <li className="menu-list-item">
          <Link to="/">Home</Link>
        </li>
        <li className="menu-list-item">
          <Link to="/biography">Biography</Link>
        </li>
        <li className="menu-list-item">
          <Link to="/gallery">Gallery</Link>
        </li>
        <li className="menu-list-item">
          {" "}
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
