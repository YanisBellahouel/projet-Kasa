import '../styles/Header.css'
import logo from '../assets/logo.png'
import Nav from './Nav'

function Header() {
    return (
        <div className='kasa-header'>
            <img src={logo} alt='Kasa' className='kasa-logo' />
            <Nav className= 'kasa-nav'/>
            
        </div>
    )
}



export default Header;
