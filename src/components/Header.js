
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">AL-AMEN Technology</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About Us</Nav.Link>
          <Nav.Link as={Link} to="/solutions">Solutions</Nav.Link>
          <Nav.Link as={Link} to="/industries">Industries</Nav.Link>
          <Nav.Link as={Link} to="/Usecases">Usecases</Nav.Link>
	  <Nav.Link as={Link} to="/resources">Resources</Nav.Link>
          <Nav.Link as={Link} to="/news">News</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
