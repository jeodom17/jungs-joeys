import React from "react";
import github from "../../assets/github.png";

var footer = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%",
};

var style = {
  textAlign: "center",
  padding: "20px",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
};

var size = {
  width: "42px",
  height: "42px",
};

// <a class="white-text text-lighten-4 right" href="#!">More Links</a>
function Footer() {
  return (
    <div>
      <div style={footer} />

      <div style={style}>
        <a href="https://github.com/jeodom17/project-3" target="_blank">
          <img src={github} alt="github icon" style={size}></img>
        </a>
      </div>
    </div>
  );
}

export default Footer;
