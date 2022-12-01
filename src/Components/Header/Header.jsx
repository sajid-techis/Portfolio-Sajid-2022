import React from "react";
import CTA from "./CTA";
import "./Header.css";
import profilePic from "../../assets/img/me4.jpg";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Sajid Khurshid Bhat</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="profile">
          <img src={profilePic} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
