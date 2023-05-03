import "./Tags.css"
import Element from "../Element";
import { useParams } from "react-router-dom";



function Tags () {

    const id_logement = useParams();
    
    let logement = Element.find(Element => Element.id === id_logement.id);

    const length = logement.tags.length
    console.log(length);

    const tags = logement.tags
    console.log(tags);

    

    

    return (
        <div className="kasa-tags">
            {tags.map((tag) => (
                <div className="tags" key={tag} >
                    {tags}
                </div>
            ))}
        </div>
    )
}

export default Tags