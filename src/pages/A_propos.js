import Header from "../Component/header/Header";
import Collapse from "../Component/collapse/Collapse";
import Footer from "../Component/footer/Footer";
import AboutCollapse from "../Component/AboutCollapse";
import Banner from "../Component/banner/Banner";
import banner from "../assets/banner.png"


function About () {
    return (
        
        <div>
            <Header/>
            <Banner classname="BannerAbout"
            imgSource={banner}
            altText="Un paysage sauvage de bord de mer"
            />
            <div id="collapse_about">
                 {AboutCollapse.map((about, id) =>
            <Collapse
            key={id}
            Title={about.AboutTitle}
            Text={about.AboutText}
            />          
            )}
            </div>
           
            <Footer/>
        </div>
    )
}

export default About