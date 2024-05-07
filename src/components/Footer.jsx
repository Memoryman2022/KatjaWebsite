import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "../CSS/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <ul>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/facebook.png" alt="Facebook" />
        </a>
        <a
          href="https://www.instagram.com/art_by_katja_hh/?igshid=ZG5haXlzdDVmc2M5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/instagram.png" alt="Instagram" />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/LinkedIn.png" alt="LinkedIn" />
        </a>
        <a
          href="https://www.patreon.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/patreon.png" alt="Patreon" />
        </a>
        <a
          href="https://www.example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/x.png" alt="Example" />
        </a>
      </ul>
      <div className="footer-info">
        <h5>© 2024 Katja Stadel</h5>
        <h5>Website by Robert Cannon</h5>
      </div>
    </div>
  );
}
export default Footer;
