/** @module TopNav */

import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Auth from "../Auth/Auth";
import Discord from "../Discord/Discord";

import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./styles/topnav.scss";

const TopNav = () => {
  let navigate = useNavigate();

  return (
    <>
      <Navbar collapseOnSelect expand="md" variant="dark" className="navBar">
        <Navbar.Brand className="navBrand" onClick={() => navigate("/")}>
          Tracking Tarkov
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="navLink" onClick={() => navigate("/")}>
              Quest Tree
            </NavLink>
            <NavLink className="navLink" onClick={() => navigate("/maps")}>
              Maps
            </NavLink>
            <NavLink className="navLink" onClick={() => navigate("/ammo_chart")}>
              Ammo Chart
            </NavLink>
          </Nav>
          <Nav style={{ paddingRight: "10px" }}>
            <NavLink className="me-2 navLink" onClick={() => navigate("/attributions")}>
              Attributions
            </NavLink>
            <Discord />

            <Auth />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default TopNav;
