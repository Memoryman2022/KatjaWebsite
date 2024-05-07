import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "../CSS/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <ul>
        <img src="/facebook.png" />
        <img src="/instagram.png" />
        <img src="/LinkedIn.png" />
        <img src="/patreon.png" />
        <img src="/x.png" />
      </ul>
      <div className="footer-info">
        <h5>
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </h5>
        <h5>© 2024 Katja Stadel</h5>
        <h5>Website by Robert Cannon</h5>
      </div>
    </div>
  );
}
export default Footer;
