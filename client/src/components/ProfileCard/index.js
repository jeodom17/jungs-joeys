
import React from "react";
import { Link } from "react-router-dom";
// import { Sidenav } from "materialize-css";
import profileImage from '../../assets/image.png';
import "./style.css"

// const styles = {
//     phoneStyle: {
//         "color": "green"
//     }
// }

export default function SideNav() {
  return (
    <>
    <div className="card">
        <h3>John Doe</h3>
        <img className="photo circle" src={profileImage} alt="John"></img>
        <p className="title">CEO & Founder, Example</p>
        <p>Harvard University</p>
        <p>Harvard University</p>
        <p>Harvard University</p>
        <p>Harvard University</p>
        
        <p><button>Contact</button></p>
    </div>
    </>
  );
  }