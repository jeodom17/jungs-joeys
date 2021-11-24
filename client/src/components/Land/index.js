import React,{ useRef, useEffect } from "react";
// import M from "materialize-css";
import { Link } from "react-router-dom";
import BgPhoto from '../../assets/bg.webp'
// import "./style.css"



export default function Land() {

  // const carouselRef = useRef();

  // useEffect(() => {
  //   M.Carousel.init(carouselRef.current, {
  //     //add materialize  options here
  //     fullWidth: false
  //   });
  // });
  
    return (
    
      <div
        className="bg_image"
        style={{
          backgroundImage: 'url('+BgPhoto+')',
          backgroundSize: "cover",
          height: "100vh",
          color: "#f5f5f5"
        }}
      >
        <Link to="/" className="center waves-effect waves-light btn-large">LOGIN / SIGNUP</Link>

      </div>
    );
  }

// export default instance;