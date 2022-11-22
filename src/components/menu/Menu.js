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

function Menu() {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div className={style.container}>
      <Navbar className="navbar navbar-light">
        <NavbarBrand />
        <NavbarToggler onClick={toggleNavbar} className={style.burger} />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className={style.menu} navbar>
            <NavItem>
              <NavLink href="">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Hiring</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default Menu;
