/** @module Nav */

import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

const Nav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
        <Nav className="me-auto"></Nav>
      </Container>
    </Navbar>
  );
};

export default Nav;
