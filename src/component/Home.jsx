// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import imgOne from '../assets/imgOne.webp';
import imgTwo from '../assets/imgTwo.webp';
import imgThree from '../assets/imgThree.webp';
// import Carousel from 'react-bootstrap/Carousel';

export default function Home() {
  return (
    <>
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={imgOne} alt="Los Angeles" className="d-block" style={{width: "100%", height:"450px"}} />
            </div>
            <div className="carousel-item">
              <img src={imgTwo} alt="Chicago" className="d-block" style={{width: "100%", height:"450px"}} />
            </div>
            <div className="carousel-item">
              <img src={imgThree} alt="New York" className="d-block" style={{width: "100%", height:"450px"}} />
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
      </div>
    </>
  )
}
