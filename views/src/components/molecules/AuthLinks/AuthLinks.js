import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";

export default ({ }) => {
    return (
        <>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">capstone</NavbarBrand>
            {/* <NavbarToggler onClick={toggle} /> */}
            {/* <Collapse isOpen={isOpen} navbar> */}
            <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
              </Nav>
              
              <NavLink href="/register">Register</NavLink>      
              <NavLink href="/login">Login</NavLink>

            {/* </Collapse> */}
          </Navbar>
        </>
    );
};