import Carrousel from "../Component/Carrousel/Carousel";
import Header from "../Component/header/Header";
import Host from "../Component/host/Host";
import Title from "../Component/title&rate/Title";

function Logement() {
  return (
    <div>
      <Header />
      <Carrousel/>
      <Title />
      <Host/>
    </div>
  );
}

export default Logement;
