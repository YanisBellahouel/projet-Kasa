import Droite from '../droite/Droite'
import Gauche from '../gauche/Gauche'
import './G&D.css'

function G_D () {
    return(
        <div className='kasa-g_d'>
            <Gauche/>
            <Droite/>
        </div>
    )
}

export default G_D