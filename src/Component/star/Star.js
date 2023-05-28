import "./Star.css"
import star from "../../assets/star.png"
import { useParams } from "react-router-dom";
import Element from "../Element";

function Star () {
    const id_logement = useParams();
    
    let logement = Element.find(Element => Element.id === id_logement.id);

    const rate = logement.rating
    console.log(rate);

    


    return (
        <div className="kasa-star">
           <ul>
           <img src={star} alt='étoile' className='star' />
            </ul> 
        </div>
    )
}

export default Star