import './Card.css'
import Element from '../Element'
import { Link } from 'react-router-dom'
// import ElementList from '../elementList'

function Card () {
    
    return (
        <div className='kasa-card'>
            {Element.map((logement) => (
                <Link className='card-link' key={logement.id} to={'/logement/' + logement.id}>
                    <div >
                        <img src={logement.cover}
                        alt='logement' className='card-img'/> 
                        <p  className='card-title'> {logement.title}  </p>
                    </div> 
                </Link>
            ))}
        </div>
    )

}

export default Card