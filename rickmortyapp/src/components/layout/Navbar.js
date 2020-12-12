import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Logotipo</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <Link to="/allchars">
              <NavItem>
                <NavLink>Todos los personajes</NavLink>
              </NavItem>
            </Link>
            <Link to="/onlyone">
              <NavItem>
                <NavLink>directo al unico</NavLink>
              </NavItem>
            </Link>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
