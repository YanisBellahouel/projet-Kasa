import './Error.css'
import logo from '../../assets/error.png'
import { Link } from 'react-router-dom';


function Error() {
    return (
        <div className='kasa-error'>
            <img src={logo} alt='Kasa' className='error-logo' />
            <p className='error-message'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to={'/'} className='error-lien'> Retourner sur la page d'accueil </Link>
        </div>
    )
}



export default Error;