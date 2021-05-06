import React from "react";
import { Link, NavLink } from "react-router-dom";

/* <Link> --> Attach clickable links to different pages. */
/* <NavLink> --> special version of <Link> that adds styling attributes. */
const Navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li>
          <NavLink activeStyle={{ color: "red" }} exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={{ color: "red" }} to="/about">
            About
          </NavLink>
        </li>
        <li>
          <Link to="/projects" style={{ textDecoration: "none" }}>
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
