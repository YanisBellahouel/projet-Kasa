import Carrousel from "../Component/Carrousel/Carousel";
import Collapse2 from "../Component/collapse2/Collapse2";
import Collapse3 from "../Component/collapse3/Collapse3";
import Header from "../Component/header/Header";
import Host from "../Component/host/Host";
import Tags from "../Component/tags/Tags";
import Title from "../Component/title&rate/Title";
import Footer from "../Component/footer/Footer"

function Logement() {
  return (
    <div>
      <Header />
      <Carrousel/>
      <Title />
      <Host/>
      <Tags/>
      <Collapse2/>
      <Collapse3/>
      <Footer/>
    </div>
  );
}

export default Logement;
