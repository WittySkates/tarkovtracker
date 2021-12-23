/** @module TopNav */

import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Auth from "./Auth";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-bootstrap";

const TopNav = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand href="/" style={{ paddingLeft: "10px" }}>
          Tracking Tarkov
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink href="/">Quest Tree</NavLink>
            {/* <NavLink href="/quest_items">Quest Items</NavLink>
            <NavLink href="/ammo_chart">Ammo Chart</NavLink> */}
          </Nav>
          <Nav style={{ paddingRight: "10px" }}>
            <NavLink className="me-3" href="/attributions">
              Attributions
            </NavLink>
            <Auth />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default TopNav;
