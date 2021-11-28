import React from "react";
import { NavLink } from "react-router-dom";



export default function Signup() {
    return (
      <div className="App">
      <div className="appAside" />
      <div className="appForm">
        <div className="pageSwitcher">
          <NavLink
            to="/login"
            activeClassName="pageSwitcherItem-active"
            className="pageSwitcherItem"
          >
            Sign In
          </NavLink>
          <NavLink
            exact
            to="/signup"
            activeClassName="pageSwitcherItem-active"
            className="pageSwitcherItem"
          >
            Sign Up
          </NavLink>
        </div>

        <div className="formTitle">
          <NavLink
            to="/login"
            activeClassName="formTitleLink-active"
            className="formTitleLink"
          >
            Sign In
          </NavLink>{" "}
          or{" "}
          <NavLink
            exact
            to="/signup"
            activeClassName="formTitleLink-active"
            className="formTitleLink"
          >
            Sign Up
          </NavLink>
        </div>

        
      </div>
    </div>
      

    );
 }