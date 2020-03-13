import React from "react";
import { Nav, NavItem, NavLink } from 'reactstrap';

import "./AppNav.scss";


export default ({ }) => {
    return (
        <div className="appNav">
        <Nav vertical>
          <NavItem>
            <NavLink href="/dashboard">Dashboard</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/maps">Maps</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/session">Session</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/history">History</NavLink>
          </NavItem>
        </Nav>
      </div>
  
    );
};