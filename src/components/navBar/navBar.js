import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

function navBar() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">About Me</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Contact</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Projects</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Resume</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default navBar;

//dropdown menu that expands on click, links to pages for home, about me, contact, projects, and resume