import Carrousel from "../Component/Carrousel/Carousel";
import Header from "../Component/header/Header";
import Footer from "../Component/footer/Footer"
import G_D from "../Component/g&d/G&D";
import Collapse from "../Component/collapse/Collapse";
import Star from "../Component/star/Star";
function Logement() {
  return (
    <div>
      <Header />
      <Carrousel/>
      <G_D/>
     
      <Collapse/>
      <Footer/>
    </div>
  );
}

export default Logement;
