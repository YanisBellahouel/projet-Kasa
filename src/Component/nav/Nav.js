import '../nav/Nav.css'

function Nav() {
    const About = 'A Propos'
    const Acceuil = 'Acceuil'
    return (
        <nav className='kasa-nav'>
            <p className='Acceuil'>{Acceuil}</p>
            <p className='About'>{About}</p>
            </nav>
    )
}

export default Nav