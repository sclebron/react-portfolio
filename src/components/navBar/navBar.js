import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

function Navigation() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default navBar;

//dropdown menu that expands on hover, links to pages for home, about me, contact, projects, and resume