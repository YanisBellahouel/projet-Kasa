import Carrousel from "../Component/Carrousel/Carousel";
import Collapse2 from "../Component/collapse2/Collapse2";
import Collapse3 from "../Component/collapse3/Collapse3";
import Header from "../Component/header/Header";
import Footer from "../Component/footer/Footer"
import G_D from "../Component/g&d/G&D";
function Logement() {
  return (
    <div>
      <Header />
      <Carrousel/>
      <G_D/>
      <Collapse2/>
      <Collapse3/>
      <Footer/>
    </div>
  );
}

export default Logement;
