import React from "react";
import { NavItem, Icon } from "materialize-css";
import { Link } from "react-router-dom";
import "./style.css";

export default function Navbar() {
  return (
    <>
      <div className="navbar-fixed">
        <nav className="bar">
          <div className="nav-wrapper">
            <Link to="/" id="joeys" className="center brand-logo">
              Jung's Joeys
            </Link>
            <ul id="nav-mobile" className="left">
              <li>
                <Link
                  to=""
                  className="header-font dropdown-trigger"
                  data-target="dropdown1"
                >
                  Study
                  <i class="material-icons right">arrow_drop_down</i>
                  <ul id="dropdown1" className="dropdown-content">
                    <li>
                      <a href="#!">one</a>
                    </li>
                    <li>
                      <a href="#!">two</a>
                    </li>
                    <li className="divider"></li>
                    <li>
                      <a href="#!">three</a>
                    </li>
                  </ul>
                </Link>
              </li>
              <li>
                <Link to="/forum" class="header-font">
                  Interview
                </Link>
              </li>
              <li>
                <Link to="/forum" class="header-font">
                  Career
                </Link>
              </li>
            </ul>
            <ul id="nav-mobile" className="right">
              <li>
                <Link to="/profile" class="header-font">
                  Chat
                </Link>
              </li>
              <li>
                <Link to="/profile" class="header-font">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/" class="header-font">
                  Login / Signup
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
