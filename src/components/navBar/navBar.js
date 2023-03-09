import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//# in url is causing issue. change the navigation and routes to not include that, may need new bootstrap navbar

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

// function NavBar() {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="">Home</Nav.Link>
//             <Nav.Link href="AboutMe">About Me</Nav.Link>
//             <Nav.Link href="Contact">Contact</Nav.Link>
//             <Nav.Link href="Projects">Projects</Nav.Link>
//             <Nav.Link href="Resume">Resume</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }