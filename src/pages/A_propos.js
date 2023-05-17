import Header from "../Component/header/Header";
import Body2 from "../Component/body2/Body2";
import Collapse from "../Component/collapse/Collapse";
import Footer from "../Component/footer/Footer";
import AboutCollapse from "../Component/AboutCollapse";


function About () {
    return (
        
        <div>
            <Header/>
            <Body2 />
            {AboutCollapse.map((about, id) =>
            <Collapse
            key={id}
            AboutTitle={about.AboutTitle}
            AboutText={about.AboutText}
            />          
            )}
            <Footer/>
        </div>
    )
}

export default About