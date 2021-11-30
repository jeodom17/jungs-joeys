import React from "react";
import { Link } from "react-router-dom";
// import { Sidenav } from "materialize-css";
import profileImage from "../../assets/image.png";
import "./style.css";

export default function SideNav() {
  return (
    <>
      <div class="card">
        <div class="card-image">
          <img src={profileImage} alt="profile pic" className="photo"></img>
          <div class="username">USERNAME:</div>
          <div class="title">paulkeldsen</div>
        </div>
        <div class="card-content">
          <p>EMAIL:</p>
          <p class="email">paulkeldsen@gmail.com</p>
        </div>
        <div class="card-action">
          <button>Join Chat</button>
        </div>
      </div>
    </>
  );
}
