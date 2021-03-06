import React from "react";
// =================== style ======================
import "./footer.css";
import logo from "assets/logo/logo-white.svg";

function Footer() {
  return (
    <footer id="footer" className="bg-wrapper">
      <div className="container">
        <div id="footer__about-us">
          <img src={logo} height="40" alt="fooddi logo" />
          <small>
          Anyway, anytime, enjoy your shopping time
          </small>
        </div>
        <div id="footer__contact">
          <ul id="footer__contact-list">
            <li className="footer__contact-list--item">
              <i className="footer__contact-list--icon ri-phone-fill"></i>
              <span>0924325454</span>
            </li>
            <li className="footer__contact-list--item">
              <i className="footer__contact-list--icon ri-mail-fill"></i>
              <span>contact@fooddi.com</span>
            </li>
            <li className="footer__contact-list--item">
              <i className="footer__contact-list--icon ri-map-pin-2-fill"></i>
              <span>123 Láng Hạ, Hà Nội</span>
            </li>
          </ul>
          <ul id="footer__contact-social">
            <li className="footer__social-item">
              <a href="#">
                <i className="footer__social-icon ri-facebook-box-fill"></i>
              </a>
            </li>
            <li className="footer__social-item">
              <a href="#">
                <i className="footer__social-icon ri-instagram-fill"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
