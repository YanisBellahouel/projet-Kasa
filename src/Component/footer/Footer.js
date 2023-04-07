import './Footer.css'
import logo from '../../assets/logoB.png'

function Footer() {
    const text = '© 2020 Kasa. All rights reserved'
    return(
        <div className='kasa-footer'>
            <div className='footer-thing'>
                <img src={logo} alt='Kasa logo' className='footer-logo' />
                <p className='footer-text'>{text}</p>
            </div>
            

        </div>

    )

}

export default Footer