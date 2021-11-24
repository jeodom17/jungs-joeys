import React,{ useRef, useEffect } from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";
import BgPhoto from '../../assets/landing.png'
import "./style.css"



export default function Land() {

  const carouselRef = useRef();

  useEffect(() => {
    M.Carousel.init(carouselRef.current, {
      //add materialize  options here
      fullWidth: false
    });
  });

  var sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: "url(" + { BgPhoto } + ")"
  };
    

    return (
      <>
      <section style={ sectionStyle }>
      </section>

     
          {/* <div class="carousel" ref={carouselRef}>
            <Link class="carousel-item" to="#one!"><img src="https://lorempixel.com/250/250/nature/1" alt='pic'></img></Link>
            <Link class="carousel-item" to="#two!"><img src="https://lorempixel.com/250/250/nature/2" alt='pic'></img></Link>
            <Link class="carousel-item" to="#three!"><img src="https://lorempixel.com/250/250/nature/3" alt='pic'></img></Link>
            <Link class="carousel-item" to="#four!"><img src="https://lorempixel.com/250/250/nature/4" alt='pic'></img></Link>
            <Link class="carousel-item" to="#five!"><img src="https://lorempixel.com/250/250/nature/5" alt='pic'></img></Link>
            <div class="fixed-action-btn">
          </div>
    </div>*/}
    
      </>
    );
  }

// export default instance;