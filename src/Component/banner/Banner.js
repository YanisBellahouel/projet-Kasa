import './Banner.css'


function Banner1 (props) {
    
    return (
        <div className='kasa-section1'>    
            
            <img src={props.imgSource}  alt={props.altText} className='section1-img'></img>
            <p className='section1-text'>{props.text}</p>
            
            
        </div>
    )

}

export default Banner1