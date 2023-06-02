import './Banner1.css'
import rocher from '../../assets/rocher.png'

function Banner1 () {
    const text = 'Chez vous, partout et ailleurs'
    return (
        <div className='kasa-section1'>    
            
            <img src={rocher} alt='rocher' className='section1-img' />
            <p className='section1-text'>{text}</p>
            
            
        </div>
    )

}

export default Banner1