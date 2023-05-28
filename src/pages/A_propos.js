import Header from "../Component/header/Header";
import Section2 from "../Component/Section 2/section2";
import Collapse from "../Component/collapse/Collapse";
import Footer from "../Component/footer/Footer";
import AboutCollapse from "../Component/AboutCollapse";


function About () {
    return (
        
        <div>
            <Header/>
            <Section2/>
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