import './Card.css'
import Element from '../Element'
// import ElementList from '../elementList'

function Card () {
    
    return (
        <div className='kasa-card'>
            {Element.map((logement, id) => (
                <div key={logement.id}>
                <img   src={logement.cover}
                alt='logement' className='card-img'/> 
                <p  className='card-title'> {logement.title}  </p>
                </div> 
        
            ))}
        </div>
    )

}

export default Card