import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import circletext from "../../assets/circletext.png";
import "./style.css";

export default function Land() {
  return (
    <div className="landing">
      <div className="landing-header">
        <img src={circletext} className="landing-logo" alt="logo" />
      </div>
      <Link
        to="/account"
        onClick="window.scrollTo(0, 0);"
        className="center waves-effect waves-light btn-large findbtn"
      >
        LOGIN / SIGNUP
      </Link>
    </div>
  );
}
