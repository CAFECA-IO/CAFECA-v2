import style from "./Menu.module.css";
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import AboutUsPage from "../pages/AboutUsPage";
import HiringPage from "../pages/HiringPage";

function Menu() {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div className={style.container}>
      <Navbar className="navbar navbar-light">
        <NavbarBrand className="mr-auto">reactstrap</NavbarBrand>
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
      </Navbar>
    </div>
  );
}
export default Menu;
