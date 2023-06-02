import Host from '../host/Host'
import Star from '../star/Star'
import Tags from '../tags/Tags'
import Title from '../title/Title'
import Element from '../Element'
import { useParams } from 'react-router-dom'
import './InfoLogements.css'

function InfoLogements () {

    const id_logement = useParams();
    
    let logement = Element.find(Element => Element.id === id_logement.id);
    return(
        <div className='infoLogements'>
            <div className='title_tags'>
                <Title/>
                <Tags/>
            </div>
            <div className='host_star'>
                <Host/>
                <Star rating = {logement.rating}/>
            </div>
        </div>
    )
}

export default InfoLogements