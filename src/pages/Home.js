import Header from '../Component/header/Header'
import Gallery from '../Component/gallery/Gallery'
import Footer from '../Component/footer/Footer'
import Banner from '../Component/banner/Banner'
import rocher from "../assets/rocher.png"

function Home() {
    return(
         <div> 
            <Header /> 
            
            <Banner classname="BannerHome"
            imgSource={rocher}
            altText="Un paysage sauvage de bord de mer"
            text="Chez vous, partout et ailleurs"
            
            />
            <Gallery/>
            <Footer/>
         </div>


      
         
    )
}

export default Home