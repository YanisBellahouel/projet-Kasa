import Host from '../host/Host'
import Star from '../star/Star'
import Tags from '../tags/Tags'
import Title from '../title/Title'
import './InfoLogements.css'

function InfoLogements () {
    return(
        <div className='infoLogements'>
            <div className='title_host'>
                <Title/>
                <Host/>
            </div>
            <div className='tag_star'>
                <Tags/>
                <Star/>
            </div>
        </div>
    )
}

export default InfoLogements