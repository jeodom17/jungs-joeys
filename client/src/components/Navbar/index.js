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
                <Link to="/forum" className="header-font">
                  Study Forum
                </Link>
              </li>
              <li>
                <Link to="/chat" className="header-font">
                  Chat
                </Link>
              </li>
            </ul>
            <ul id="nav-mobile" className="right">
              <li>
                <Link to="/profile" className="header-font">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/account" className="header-font">
                  Account
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
