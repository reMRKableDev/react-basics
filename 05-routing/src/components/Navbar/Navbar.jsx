import React from "react";
import { Link, NavLink } from "react-router-dom";

/* <Link> --> Attach clickable links to different pages. */
/* <NavLink> --> special version of <Link> that adds styling attributes. */
const Navbar = () => {
  let activeStyle = { color: "red" };

  return (
    <nav className="navbar is-spaced is-light">
      <div className="navbar-menu is-active" id="navbarBasicExample">
        <div className="navbar-end">
          <NavLink
            className="navbar-item"
            to="/"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Home
          </NavLink>

          <Link className="navbar-item" to="/about">
            About
          </Link>

          <Link className="navbar-item" to="/projects">
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
