import Droite from '../droite/Droite'
import Gauche from '../gauche/Gauche'
import Star from '../star/Star'
import Tags from '../tags/Tags'
import Title from '../title&rate/Title'
import './G&D.css'

function G_D () {
    return(
        <div className='G_D'>
            <div className='kasa-g_d'>
                <Title/>
                <Droite/>
            </div>
            <div className='kasa-g_d'>
                <Tags/>
                <Star/>
            </div>
        </div>
    )
}

export default G_D