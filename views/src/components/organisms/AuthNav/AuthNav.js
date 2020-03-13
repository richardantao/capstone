import React, { useState } from 'react';
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
} from 'reactstrap';

export default ({ }) => {
    return (
        <>

      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">capstone</NavbarBrand>
        {/* <NavbarToggler onClick={toggle} /> */}
        {/* <Collapse isOpen={isOpen} navbar> */}
        <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink href="/Register">Register</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Login">Login</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/About">About</NavLink>
        </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        
        {/* </Collapse> */}
      </Navbar>

        </>
    );
};