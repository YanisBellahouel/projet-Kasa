import './Card.css'
import Element from '../Element'
// import ElementList from '../elementList'

function Card () {
    
    return (
        <div className='kasa-card'>
        {Element.map((logement, id) => (
            <img key={logement.id} src={logement.cover}
             alt='logement' className='card-img'/>    
        
    ))}
    </div>
    )

}

export default Card