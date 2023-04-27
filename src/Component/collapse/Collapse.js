import "./Collapse.css"
import arrow1 from "../../assets/arrow_back.png"
import { useState } from "react"
import Slide from "../slide/Slide"

function Collapse (props) {
    const [open , setOpen] = useState(false)

    const toggle = () => setOpen (o => !o)
    return (
        
            <div className="main-collapse">  
                <div className="second-collapse">
                    <button onClick={toggle} className="button-collapse">
                         <p className="text-collapse">{props.AboutTitle} </p>
                         <img src={arrow1} className="arrow-collapse" alt="fleche"></img>
                     </button>

                     <Slide visible={open}  >
                        <div className="sous-collapse">
                            <p className="desc-collapse">
                                {props.AboutText}
                            </p>
                        </div>
                    </Slide>
                </div>
                
            </div>
          

      
    )
}

export default Collapse