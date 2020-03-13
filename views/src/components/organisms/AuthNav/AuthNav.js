import React from "react";
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

export default ({ }) => {
    return (
        <>
        <Nav pills>
        <NavItem>
          <NavLink href="/" active>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Register">Register</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Login">Login</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/About">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Disabled Link</NavLink>
        </NavItem>
      </Nav>
        </>
    );
};