import React from "react";
import Logo from "../Images/Logo.svg";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <img src={Logo} alt="Logo" className="footer-logo" />
          <p className="footer-text">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          <a href="#" className="btn-social">
            <AiFillLinkedin style={{ width: "1.5rem", height: "1.5rem" }} />
          </a>
          <a href="#" className="btn-social">
            <AiFillGithub style={{ width: "1.5rem", height: "1.5rem" }} />
          </a>
        </div>
        <div className="footer-company">
          <p className="footer-title">Company </p>
          <ul className="footer-links">
            <li className="footer-link">
              <a href="">About</a>
            </li>
            <li className="footer-link">
              <a href="">Terms of Use</a>
            </li>
            <li className="footer-link">
              <a href="">Privacy Policy</a>
            </li>
            <li className="footer-link">
              <a href="">How it Works</a>
            </li>
            <li className="footer-link">
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-support">
          <p className="footer-title">Support</p>
          <ul className="footer-links">
            <li className="footer-link">
              <a href="">Support Carrer</a>
            </li>
            <li className="footer-link">
              <a href="">24h Service</a>
            </li>
            <li className="footer-link">
              <a href="">Quick Chat</a>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          {" "}
          <p className="footer-title">Contact</p>
          <ul className="footer-links">
            <li className="footer-link">
              <a href="">Whatsapp</a>
            </li>
            <li className="footer-link">
              <a href="">Support 24</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <hr className="line" />
        <div className="bottom-content">
          <p className="copyright">Copyright © 2021 Dine Market</p>
          <p className="createBy">
            Created by. <span style={{ fontWeight: "bold" }}>Ismailcet</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
