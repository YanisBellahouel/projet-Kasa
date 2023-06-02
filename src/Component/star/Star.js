import "./Star.css"
import star from "../../assets/star.png"
import starEmpty from "../../assets/empty_star.png"

function Star ({rating}) {


    const etoile = [];
// creation de 2 class 1 etoile plein et 1 etoile vide 


    for (let i = 1; i <= 5; i++) {
        const etoileImg = i <= rating ? star: starEmpty;
        etoile.push(<img src={etoileImg} alt='étoile'  className='star' />)
    }

    
    
    return (
         <div className='kasa-star'>
           <ul>       
            {etoile}
           </ul>
        </div>
    )

            
            
               
    
}

export default Star