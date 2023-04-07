import '../nav/Nav.css'

function Nav() {
    const About = 'A Propos'
    const Acceuil = 'Acceuil'
    return (
        <nav className='kasa-nav'>
            <ul className='nav-list'>
                <li className='Acceuil'>{Acceuil}</li>
                <li className='About'>{About}</li>
            </ul>
           
            </nav>
    )
}

export default Nav