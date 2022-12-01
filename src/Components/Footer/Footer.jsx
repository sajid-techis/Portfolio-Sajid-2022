import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Sajid
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/sajid.khurshidbhat.5" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/bhat_sajid44/" target="_blank">
          <FiInstagram />
        </a>
        <a
          href="https://twitter.com/BhatSaj97515388?t=Lq5v3yh1cqkKC4k4e2Y9pw&s=09"
          target="_blank"
        >
          <IoLogoTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Sajid Khurshid bhat.All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
