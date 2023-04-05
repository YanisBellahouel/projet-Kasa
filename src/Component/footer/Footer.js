import './Footer.css'
import logo from '../../assets/logoB.png'

function Footer() {
    const text = '© 2020 Kasa. All rights reserved'
    return(
        <div className='kasa-footer'>
            <img src={logo} alt='Kasa logo' className='footer-logo' />
            <p className='footer-text'>{text}</p>

        </div>

    )

}

export default Footer