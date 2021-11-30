import React from "react";
import github from "../../assets/github.png";
import abraham from "../../assets/abraham.png";
import justin from "../../assets/justin.png";
import lesiana from "../../assets/lesiana.png";
import parker from "../../assets/parker.png";
import "./style.css";

// <a class="white-text text-lighten-4 right" href="#!">More Links</a>
function Footer() {
  return (
    <div className="footer-color">
      <div className="footer" />
      <div className="style">
        <a href="https://github.com/abrahamin" rel="noreferrer" target="_blank">
          <img src={abraham} alt="abraham" className="size"></img>
        </a>
        <a href="https://github.com/jeodom17" rel="noreferrer" target="_blank">
          <img src={justin} alt="justin" className="size"></img>
        </a>
        <a
          href="https://github.com/jeodom17/project-3"
          rel="noreferrer"
          target="_blank"
        >
          <img src={github} alt="github icon" className="size"></img>
        </a>
        <a href="https://github.com/Leci1259" rel="noreferrer" target="_blank">
          <img src={lesiana} alt="lesiana" className="size"></img>
        </a>
        <a
          href="https://github.com/parkersatterfield"
          rel="noreferrer"
          target="_blank"
        >
          <img src={parker} alt="parker" className="size"></img>
        </a>
      </div>
    </div>
  );
}

export default Footer;
