import React from "react";
import { Nav, NavItem, NavLink } from 'reactstrap';

import "./AppLinks.scss";

export default ({ }) => {
    return (
      <div className="appNav">
        <Nav vertical>
          <NavItem>
            <NavLink href="/app/dashboard">Dashboard</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/app/maps">Maps</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/app/session">Session</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
};