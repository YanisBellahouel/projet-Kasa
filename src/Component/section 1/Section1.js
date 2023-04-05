import './Section1.css'
import rocher from '../../assets/rocher.png'

function Section1 () {
    const text = 'Chez vous, partout et ailleurs'
    return (
        <div className='kasa-section1'>
            <p className='section1-text'>{text}</p>
            <div className='section1-group'>
                <div className='section1-background1'></div>
                <img src={rocher} alt='rocher' className='section1-img' />
                <div className='section1-background2'></div>
            </div>
            
        </div>
    )

}

export default Section1