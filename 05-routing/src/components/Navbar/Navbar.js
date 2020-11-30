import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li>
          <Link to="/">Home</Link>
          {/* <NavLink activeStyle={{ color: "red" }} to="/">
            Home
          </NavLink> */}
        </li>
        <li>
          <Link to="/about">About</Link>
          {/* <NavLink activeStyle={{ color: "red" }} to="/about">
            About
          </NavLink> */}
        </li>
        <li>
          <Link to="/projects" style={{ textDecoration: "none" }}>
            Projects
          </Link>
          {/* <NavLink activeStyle={{ color: "red" }} to="/projects">
            Projects
          </NavLink> */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
