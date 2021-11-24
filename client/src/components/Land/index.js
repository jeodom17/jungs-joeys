import M from "materialize-css";
import { Link } from "react-router-dom";



//  const instance: M.Carousel && M.Carousel.init([
//    {
//   fullWidth: true
// }
// ]);

//  const instance = M.Carousel.init({
//   fullWidth: true
// });



export default function Land() {
    M.AutoInit();

    return (
      <>
      <div>
          <div class="fixed-action-btn">
            <Link class="col s3 waves-effect waves-light btn-large" to="https://github.com/jeodom17/project-3">Login / signup</Link>
          </div>
          <div class="carousel">
            <Link class="carousel-item" to="#one!"><img src="https://lorempixel.com/250/250/nature/1" alt='pic'></img></Link>
            <Link class="carousel-item" to="#two!"><img src="https://lorempixel.com/250/250/nature/2" alt='pic'></img></Link>
            <Link class="carousel-item" to="#three!"><img src="https://lorempixel.com/250/250/nature/3" alt='pic'></img></Link>
            <Link class="carousel-item" to="#four!"><img src="https://lorempixel.com/250/250/nature/4" alt='pic'></img></Link>
            <Link class="carousel-item" to="#five!"><img src="https://lorempixel.com/250/250/nature/5" alt='pic'></img></Link>
          </div>
      </div>
      </>
    );
  }

// export default instance;