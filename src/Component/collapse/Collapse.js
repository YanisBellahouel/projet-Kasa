import "./Collapse.css"
import arrow1 from "../../assets/arrow_back.png"
import { useState } from "react"
import Slide from "../slide/Slide"

function Collapse () {
    const [open , setOpen] = useState(true)

    const toggle = () => setOpen (o => !o)
    return (
        
            <div className="main-collapse">
                <div className="second-collapse">
                    <button onClick={toggle} className="button-collapse">
                         <p className="text-collapse"> Respect</p>
                         <img src={arrow1} className="arrow-collapse" alt="fleche"></img>
                     </button>

                     <Slide visible={open}  >
                        <div className="sous-collapse">
                            <p className="desc-collapse">
                                La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                            </p>
                        </div>
                    </Slide>
                </div>
            </div>
          

      
    )
}

export default Collapse