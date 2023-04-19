import { Link } from 'react-router-dom'
import '../nav/Nav.css'

function Nav() {
    const About = 'A Propos'
    const Acceuil = 'Acceuil'
    return (
        <nav className='kasa-nav'>
            <ul className='nav-list'>
               <Link to={'/'} className='Acceuil' > <li >{Acceuil}</li></Link>
                <Link to={'/About'} className='About'><li >{About}</li></Link>
            </ul>
           
        </nav>
    )
}

export default Nav