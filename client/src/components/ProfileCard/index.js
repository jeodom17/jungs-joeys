import React from "react";
import { Link } from "react-router-dom";
// import { Sidenav } from "materialize-css";
import profileImage from "../../assets/image.png";
import "./style.css";

export default function SideNav() {
  return (
    <>
      <div className="card">
        <div className="card-image">
          <img src={profileImage} alt="profile pic" className="photo"></img>
          <div className="username">USERNAME:</div>
          <div className="title">paulkeldsen</div>
        </div>
        <div className="card-content">
          <p>EMAIL:</p>
          <p className="email">paulkeldsen@gmail.com</p>
        </div>
        <div className="card-action">
          <button>Join Chat</button>
        </div>
      </div>
    </>
  );
}
