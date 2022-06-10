import React from "react";
import "./footer.css";
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        RajShankar
      </a>

      <ul className="permalinks">
        <li>
          <a href="#"></a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/rajshankarM" target="_blank">
          <GoMarkGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/raj-shankar-27a58b15b/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Rajshankar. All rights reserved </small>
      </div>
    </footer>
  );
};

export default Footer;
