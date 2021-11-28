import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import jungaroo from "../../assets/jungaroo.png";
import "./style.css";

export default function Land() {
  return (
    <div className="landing">
      <div className="landing-header">
        <img src={jungaroo} className="landing-logo" alt="logo" />
      </div>
      <Link
        to="/"
        className="center waves-effect waves-light btn-large findbtn"
      >
        LOGIN / SIGNUP
      </Link>
    </div>
  );
}
