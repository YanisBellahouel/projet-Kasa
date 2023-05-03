import "./Collapse3.css"
import arrow1 from "../../assets/arrow_back.png"
import { useState } from "react"
import Slide2 from "../slide2/Slide_s"
import { useParams } from "react-router-dom"
import Element from "../Element"

function Collapse3 () { 
    const id_logement = useParams();
    let logement = Element.find(Element => Element.id === id_logement.id);

    
    const [open , setOpen] = useState(false)

    const toggle = () => setOpen (o => !o)

    
    
   

    return (
        
            <div className="main-collapse3">  
                <div className="second-collapse3">
                    <button onClick={toggle} className="button-collapse3">
                         <p className="text-collapse3">Equipments </p>
                         <img src={arrow1} className="arrow-collapse3" alt="fleche"></img>
                     </button>

                     <Slide2 visible={open}  >
                        <div className="sous-collapse3">
                            <p className="desc-collapse3">
                                {logement.equipments}
                            </p>
                        </div>
                    </Slide2>
                </div>              
            </div>
          

      
    )
}

export default Collapse3