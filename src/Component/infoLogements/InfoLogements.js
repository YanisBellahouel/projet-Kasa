import Host from '../host/Host'
import Star from '../star/Star'
import Tags from '../tags/Tags'
import Title from '../title/Title'
import './InfoLogements.css'

function InfoLogements () {
    return(
        <div className='infoLogements'>
            <div className='title_tags'>
                <Title/>
                <Tags/>
            </div>
            <div className='host_star'>
                <Host/>
                <Star/>
            </div>
        </div>
    )
}

export default InfoLogements