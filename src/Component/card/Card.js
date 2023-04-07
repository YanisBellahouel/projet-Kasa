import './Card.css'
import Element from '../Element'
// import ElementList from '../elementList'

function Card () {
    
    return (
        <div className='kasa-card'>
            {Element.map((logement, id) => (
                <div>
                <img  key={logement.id} src={logement.cover}
                alt='logement' className='card-img'/> 
                <p key={logement.title} className='card-title'> {logement.title}  </p>
                </div> 
        
            ))}
        </div>
    )

}

export default Card