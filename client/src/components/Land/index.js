import M from "materialize-css";


 M.AutoInit();

//  const instance: M.Carousel && M.Carousel.init([
//    {
//   fullWidth: true
// }
// ]);

//  const instance = M.Carousel.init({
//   fullWidth: true
// });



export default function Land() {
    return (
      <>
    <div class="container">
      <div class="row">
      
     <a class="col s3 waves-effect waves-light btn-large" href="https://github.com/jeodom17/project-3">Login / signup</a>

  <div class="carousel">
    <a class="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1" alt='pic'></img></a>
    <a class="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2" alt='pic'></img></a>
    <a class="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3" alt='pic'></img></a>
    <a class="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4" alt='pic'></img></a>
    <a class="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5" alt='pic'></img></a>
  </div>
     
     </div>
    </div>
      </>
    );
  }

// export default instance;