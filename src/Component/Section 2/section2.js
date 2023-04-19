import './section2.css'
import banner from '../../assets/banner.png'

function Section2 () {

    return (
        <div className='kasa-section2'>
            <div className='section2-group'>
                <div className='section2-background1'></div>
                <img src={banner} alt='rocher' className='section2-img' />
                <div className='section2-background2'></div>
            </div>
            
        </div>
    )

}

export default Section2