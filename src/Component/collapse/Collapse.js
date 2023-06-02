import "./Collapse.css"
import arrowUp from "../../assets/arrow_up.png"
import arrowDown from "../../assets/arrow_back.png"
import { useState } from "react"
import Slide from "../slide/Slide"

function Collapse (props) {
    const [open , setOpen] = useState(false)

    const toggle = () => setOpen (o => !o)
    
    

    const arrowImg = open ? arrowDown: arrowUp;
    

    
    
    return (
        
            <div className="main-collapse">  
                
                    <button onClick={toggle} className="button-collapse">
                         <p className="text-collapse">{props.Title} </p>
                         <img src={arrowImg} className={open ? "arrowDown": "arrowUp"} alt="fleche"></img>
                     </button>

                     <Slide visible={open}  >
                        <div className="sous-collapse">
                            <ul className="desc-collapse">
                                {props.Text}
                            </ul>
                        </div>
                    </Slide>              
            </div>
          

      
    )
}

export default Collapse