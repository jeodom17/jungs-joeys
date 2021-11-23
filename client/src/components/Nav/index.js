import React from "react";
import { Navbar, NavItem, Icon } from "materialize-css";

export default function Nav() {
  return (
    <>
    <nav>
    <div class="nav-wrapper  light-blue lighten-2">
      <a href="https://github.com/jeodom17/project-3" class="brand-logo left">Jung's Joey's</a>
      <ul id="nav-mobile" class="right -on-med-and-down">
      <li><a href="sass.html" class="header-font">Home</a></li>
                <li><a href="badges.html" class="header-font">Study</a></li>
                <li class="active"><a href="collapsible.html" class="header-font">Interview</a></li>
                <li><a href="badges.html" class="header-font">Career</a></li>
        <li><a href="https://github.com/jeodom17/project-3">MY PROFILE</a></li>
        <li><a href="https://github.com/jeodom17/project-3">Login / Signup</a></li>
        <li>

        </li>
      </ul>
    </div>
  </nav>
    </>
  );
}
