import React from "react";
import { NavItem, Icon } from "materialize-css";
import { Link } from "react-router-dom";
import Auth from '../../utils/auth';

import "./style.css";

export default function Navbar() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
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
            <Link to="/" onClick={() => Auth.logout()} className="header-font">
              Logout
            </Link>
          </li>
        </ul>
      </div>
      );
    } else {
      return (
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
            <Link to="/account" className="header-font">
              Account
            </Link>
          </li>
        </ul>
      </div>
      );
    }
  }

  return (
    <>
      <div className="navbar-fixed">
        <nav className="bar">
        {showNavigation()}
        </nav>
      </div>
    </>
  );
}