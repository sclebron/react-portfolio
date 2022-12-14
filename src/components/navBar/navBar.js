import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
import Dropdown from "react-bootstrap/Dropdown";
import { GiHamburgerMenu } from "react-icons/gi";

function Navigation() {
  return (
    <Dropdown className="menu-toggle" align="end">
      <Dropdown.Toggle
        className="menutoggle"
        variant="dark"
        id="dropdown-basic"
      >
        <GiHamburgerMenu />
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropmenu" variant="dark">
        <Dropdown.Item className="swing-in-top-fwd">
          <Link
            className="dropitem"
            to={{ pathname: "/DG-Professional-Portfolio" }}
          >
            Home
          </Link>
        </Dropdown.Item>
        <Dropdown.Item className="swing-in-top-fwd-1">
          <Link className="dropitem" to={{ pathname: "/AboutMe" }}>
            About Me
          </Link>
        </Dropdown.Item>
        <Dropdown.Item className="swing-in-top-fwd-2">
          <Link className="dropitem" to={{ pathname: "/Projects" }}>
            Projects
          </Link>
        </Dropdown.Item>
        <Dropdown.Item className="swing-in-top-fwd-3">
          <Link className="dropitem" to={{ pathname: "/Contact" }}>
            Contact
          </Link>
        </Dropdown.Item>
        <Dropdown.Item className="swing-in-top-fwd-4">
          <Link className="dropitem" to={{ pathname: "/Resume" }}>
            Resume
          </Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Navigation;