import Carrousel from "../Component/Carrousel/Carousel";
import Header from "../Component/header/Header";
import Footer from "../Component/footer/Footer"
import Collapse from "../Component/collapse/Collapse";
import Element from "../Component/Element";
import { useParams } from "react-router-dom";
import InfoLogements from "../Component/infoLogements/InfoLogements";



function Logement() {
  const id_logement = useParams();
    
    let logement = Element.find(Element => Element.id === id_logement.id);

    if (logement === undefined) { 
        return window.location.replace('/*');
      
    }
   

    const equipements = logement.equipments
    const description = logement.description


    
  return (
    <div>
      <Header />
      <Carrousel/>
      <InfoLogements/> 
      <div className="logement-collapse"> 
        <Collapse
          Title={"Description"}
          Text={ description}
        />   
        
        <Collapse
          Title={"Equipements"}
             Text={equipements.map((Element) => (
              <p className="items"key={Element}>
                {Element}        
              </p>
            ))}
        /> 

      </div>
              
      <Footer/>
    </div>
  );
}

export default Logement;
