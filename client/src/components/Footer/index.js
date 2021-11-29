import React from "react";
import github from "../../assets/github.png";
import abraham from "../../assets/abraham.png";
import justin from "../../assets/justin.png";
import lesiana from "../../assets/lesiana.png";
import parker from "../../assets/parker.png";

var footer = {
  display: "block",
  padding: "5vh 0vh",
  height: "10vh",
  width: "100%",
};

var style = {
  textAlign: "center",
  height: "10vh",
  width: "auto",
};

var size = {
  padding: "1rem 1rem",
  width: "5rem",
  height: "5rem",
};

// <a class="white-text text-lighten-4 right" href="#!">More Links</a>
function Footer() {
  return (
    <div>
      <div style={footer} />

      <div style={style}>
        <a href="https://github.com/abrahamin" rel="noreferrer" target="_blank">
          <img src={abraham} alt="abraham" style={size}></img>
        </a>
        <a href="https://github.com/jeodom17" rel="noreferrer" target="_blank">
          <img src={justin} alt="justin" style={size}></img>
        </a>
        <a
          href="https://github.com/jeodom17/project-3"
          rel="noreferrer"
          target="_blank"
        >
          <img src={github} alt="github icon" style={size}></img>
        </a>
        <a href="https://github.com/Leci1259" rel="noreferrer" target="_blank">
          <img src={lesiana} alt="lesiana" style={size}></img>
        </a>
        <a
          href="https://github.com/parkersatterfield"
          rel="noreferrer"
          target="_blank"
        >
          <img src={parker} alt="parker" style={size}></img>
        </a>
      </div>
    </div>
  );
}

export default Footer;
