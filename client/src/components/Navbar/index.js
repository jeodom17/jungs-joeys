import React from "react";
import { NavItem, Icon } from "materialize-css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav>
        <div class="nav-wrapper  light-blue lighten-2">
          <Link to="/" class="brand-logo left">
            Jung's Joey's
          </Link>
          <ul id="nav-mobile" class="right -on-med-and-down">
            <li>
              <Link
                to="https://github.com/jeodom17/project-3"
                class="header-font"
              >
                Study
              </Link>
            </li>
            <li class="active">
              <Link
                to="https://github.com/jeodom17/project-3"
                class="header-font"
              >
                Interview
              </Link>
            </li>
            <li>
              <Link
                to="https://github.com/jeodom17/project-3"
                class="header-font"
              >
                Career
              </Link>
            </li>
            <li>
              <Link to="/profile">MY PROFILE</Link>
            </li>
            <li>
              <Link to="https://github.com/jeodom17/project-3">
                Login / Signup
              </Link>
            </li>
            <li></li>
          </ul>
        </div>
      </nav>
    </>
  );
}
