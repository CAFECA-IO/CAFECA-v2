import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

import AboutUsPage from "../../pages/about_us_page";
import HiringPage from "../../pages/hiring_page";
import style from "./menu.module.css";

function Mainmenu() {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div className={style.menu}>
      {/*       <Navbar color="dark">
        <NavbarBrand>CAFECA</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className={style.burger} />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className={style.menu} navbar>
            <NavItem>
              <NavLink href="/about-us" element={<AboutUsPage />}>
                About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/hiring" element={<HiringPage />}>
                Hiring
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar> */}
      {/*       <Navbar bg="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="/about-us">About Us</NavDropdown.Item>
            <NavDropdown.Item href="/hiring">We Are Hiring</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar> */}
      <ul>
        <li>
          <Link to="/about-us">ABOUT US</Link>
        </li>
        <li>
          <Link to="/hiring">WE ARE HIRING</Link>
        </li>
      </ul>
    </div>
  );
}
export default Mainmenu;
