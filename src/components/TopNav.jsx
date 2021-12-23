/** @module TopNav */

import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Auth from "./Auth";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const TopNav = () => {
  let navigate = useNavigate();

  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand
          onClick={() => navigate("/")}
          style={{ paddingLeft: "10px", cursor: "pointer" }}
        >
          Tracking Tarkov
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink onClick={() => navigate("/")}>Quest Tree</NavLink>
            {/* <NavLink to="/quest_items">Quest Items</NavLink>
            <NavLink to="/ammo_chart">Ammo Chart</NavLink> */}
          </Nav>
          <Nav style={{ paddingRight: "10px" }}>
            <NavLink className="me-3" onClick={() => navigate("/attributions")}>
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
