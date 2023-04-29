import './Title.css'
import { useParams } from 'react-router-dom';
import Element from '../Element'


function Title () {
    

    const id_logement = useParams();
    
    let logement = Element.find(Element => Element.id === id_logement.id);
    console.log(logement)
    
    

    
    return (
        <div className='kasa-titleRate'>       
                <div className='titles'>
                    <h1 className='title'>{logement.title}</h1>
                    <h2 className='localisation'>{logement.location}</h2>
                </div>
        </div>
    )

}

export default Title