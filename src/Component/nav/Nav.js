import { NavLink } from 'react-router-dom'
import '../nav/Nav.css'

function Nav() {
    const About = 'A Propos'
    const Acceuil = 'Acceuil'
    return (
        <nav className='kasa-nav'>
            <ul className='nav-list'>
                <NavLink className="header-link"  to={'/'}>
                    <li>{Acceuil}</li></NavLink>
                <NavLink className="header-link"  to={'/About'}>
                    <li>{About}</li></NavLink>
            </ul>
           
        </nav>
    )
}

export default Nav