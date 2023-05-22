import Carrousel from "../Component/Carrousel/Carousel";
import Header from "../Component/header/Header";
import Footer from "../Component/footer/Footer"
import G_D from "../Component/g&d/G&D";
import Collapse from "../Component/collapse/Collapse";
import Element from "../Component/Element";
import { useParams } from "react-router-dom";


function Logement() {
  const id_logement = useParams();
    
    let logement = Element.find(Element => Element.id === id_logement.id);
   

    const equipements = logement.equipments
    const description = logement.description
  return (
    <div>
      <Header />
      <Carrousel/>
      <G_D/> 
      <Collapse
        Title={"Equipements"}
          Text={equipements.map((Element) => (
            <div className="items"key={Element}>
            <p className="item" >
              {Element}           
            </p>
            </div>
        ))}
      /> 
      <Collapse
        Title={"Description"}
        Text={ description}
      />            
      <Footer/>
    </div>
  );
}

export default Logement;
