import Header from "../Component/header/Header";
import Collapse from "../Component/collapse/Collapse";
import Footer from "../Component/footer/Footer";
import AboutCollapse from "../Component/AboutCollapse";
import Banner2 from "../Component/banner 2/Banner2";


function About () {
    return (
        
        <div>
            <Header/>
            <Banner2/>
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