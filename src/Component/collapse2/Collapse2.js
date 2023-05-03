import "./Collapse2.css"
import arrow1 from "../../assets/arrow_back.png"
import { useState } from "react"
import Slide2 from "../slide2/Slide_s"
import { useParams } from "react-router-dom"
import Element from "../Element"

function Collapse2 () { 
    const id_logement = useParams();
    let logement = Element.find(Element => Element.id === id_logement.id);

    
    const [open , setOpen] = useState(false)

    const toggle = () => setOpen (o => !o)

    
    
   

    return (
        
            <div className="main-collapse2">  
                <div className="second-collapse2">
                    <button onClick={toggle} className="button-collapse2">
                         <p className="text-collapse2">Description </p>
                         <img src={arrow1} className="arrow-collapse2" alt="fleche"></img>
                     </button>

                     <Slide2 visible={open}  >
                        <div className="sous-collapse2">
                            <p className="desc-collapse2">
                                {logement.description}
                            </p>
                        </div>
                    </Slide2>
                </div>              
            </div>
          

      
    )
}

export default Collapse2