import './Title.css'
import { useParams } from 'react-router-dom';


function Title () {

    const params = useParams();
    console.log(params)
   

    return (
        <div className='kasa-titleRate'>
          
                <div className='titles'>
                    <h1 className='title'>{params.title}
            </h1>
                    <h2 className='localisation'>{params.location}</h2>
                </div>
        </div>
    )

}

export default Title