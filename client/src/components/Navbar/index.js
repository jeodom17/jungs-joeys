import React from "react";
import { NavItem, Icon } from "materialize-css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div class="navbar-fixed">
      <ul id="dropdown1" class="dropdown-content">
        <li><a href="#!">one</a></li>
        <li><a href="#!">two</a></li>
        <li className="divider"></li>
        <li><a href="#!">three</a></li>
      </ul>
      <nav>
        <div className="nav-wrapper  light-blue lighten-2">
          <Link to="/" class="brand-logo left">
            Jung's Joey's
          </Link>
          <ul id="nav-mobile" class="right -on-med-and-down">
            <li>
              <Link
                to=""
                className="header-font dropdown-trigger" data-target="dropdown1"
              >
                Study
                <i class="material-icons right">arrow_drop_down</i>
              </Link>
            </li>
            <li class="active">
              <Link
                to="/forum"
                class="header-font"
              >
                Interview
              </Link>
            </li>
            <li>
              <Link
                to="/forum"
                class="header-font"
              >
                Career
              </Link>
            </li>
            <li>
              <Link to="/profile">MY PROFILE</Link>
            </li>
            <li>
              <Link to="/">
                Login / Signup
              </Link>
            </li>
            <li></li>
          </ul>
        </div>
      </nav>
      </div>
    </>
  );
}
