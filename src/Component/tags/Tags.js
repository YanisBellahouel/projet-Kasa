import "./Tags.css"
import Element from "../Element";
import { useParams } from "react-router-dom";



function Tags () {

    const id_logement = useParams();
    
    let logement = Element.find(Element => Element.id === id_logement.id);

    const length = logement.tags.length
   

    const tags = logement.tags
    

    

    

    return (
        <div className="kasa-tags">
                 {tags.map((Element) => (
                    <div className="tag" key={Element}>
                        <p className="tag-p"> {Element}</p>                     
                    </div> 
                
            ))}
        </div>
    )
}

export default Tags