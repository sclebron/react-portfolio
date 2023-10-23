import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
      <div className="navBar">
      <Link to="/react-portfolio/">
          <button className="navBtn" id="homepage">
            Home
          </button>
        </Link>
        <Link to="/AboutMe">
          <button className="navBtn" id="aboutme">
            About Me
          </button>
        </Link>
        <Link to="/Projects">
          <button className="navBtn" id="projects">
            Projects
          </button>
        </Link>
        <Link to="/Resume">
          <button className="navBtn" id="resume">
            Resume
          </button>
        </Link>
        <Link to="/Contact">
          <button className="navBtn" id="contact">
            Contact
          </button>
        </Link>
      </div>
  );
}

export default NavBar;