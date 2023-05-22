import "./Carousel.css"
import Element from "../Element";
import ArrowLeft from "../../assets/arrow_left.png";
import ArrowRight from "../../assets/arrow_right.png";
import { useParams } from 'react-router-dom';
import { useState } from "react";

function Carousel () {

    const id_logement = useParams();
    
    let logement = Element.find(Element => Element.id === id_logement.id);

    const [current, setCurrent] = useState(0);

    const length = logement.pictures.length
  
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1 );
      };
    
      const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1 );
      };

      

    return(
        <div className="kasa-carousel">
            <img src={ArrowLeft} className="carousel-arrow-left" alt="fleche" onClick={prevSlide}></img>
            <div className="img_count">
              <img src={logement.pictures[current]} alt="logement" className="carousel-img"></img>
              <p className="count">{[current +1]}/{[length]}</p>
            </div>
           
            <img src={ArrowRight} className="carousel-arrow-right" alt="fleche" onClick={nextSlide}></img>
        </div>
    )
}

export default Carousel