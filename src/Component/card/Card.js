import './Card.css'
import { Link } from 'react-router-dom'
import Element from '../Element'


function Card () {
   
    
    return (
        <div className='kasa-card'>
            {Element.map((logement) => (
                <Link className='card-link' key={logement.id} to={logement.id ? '/logement/' + logement.id : '/*'}>
                    <div >
                        <img src={logement.cover} alt='logement' className='card-img'/> <div className='filtre'></div>
                        <p  className='card-title'> {logement.title}  </p>
                    </div> 
                </Link>
            ))}
        </div>
    )

}

export default Card