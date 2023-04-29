import "./Host.css"
import Element from "../Element";
import { useParams } from "react-router-dom";

function Host () {

    const id_logement = useParams();
    
    let logement = Element.find(Element => Element.id === id_logement.id);

    const host = logement.host


    return(
        <div className="kasa-host">
           <div className="host-name">{host.name}</div> 
           <img className="host-img" src={host.picture} alt="profile"></img>
        </div>
    )
}

export default Host