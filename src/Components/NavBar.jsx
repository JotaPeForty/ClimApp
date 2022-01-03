import React from "react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import "../Sass/NavBar.scss";

const NavBar = () => {
  return (
    <div>
      <div className="icons">
        <a
          href="https://github.com/JotaPeForty/ClimApp"
          className="icon"
          target="_blank"
          rel="noreferrer"
        >
          <SiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/juan-pablo-benavente-dev/"
          className="icon"
          target="_blank"
          rel="noreferrer"
        >
          <SiLinkedin />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
