import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="headerNav">
      <div className="navBar">
        <Link to="/AboutMe">
          <button className="navBtn" id="aboutme">
            AboutMe
          </button>
        </Link>
        <Link to="/Contact">
          <button className="navBtn" id="contact">
            Contact
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
      </div>
    </header>
  );
}

export default NavBar;