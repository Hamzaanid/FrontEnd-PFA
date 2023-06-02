// cette page pour integrer les donner de chaque layer (internat,class,...)

import  React,{ useEffect,useState } from "react";
import Graphic from "@arcgis/core/Graphic";
import Popup from "../widget/popup.js";
// import FeatureLayerfrom from "@arcgis/core/layers/FeatureLayer";
// import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import { useNavigate } from 'react-router-dom';

const Layer = ({View}) => {
  const navigate = useNavigate();
  const [attribute, setAttribute] = useState({
    Nom: "",
    Description: "",
  });
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const navigateTo = ()=>{
    handleClose();
    return navigate("/pageReclamation");
  }
  useEffect(() => {
    const layer = View.map.findLayerById("Services");
    const infoLayer = [
      [-6.867388317460508,33.983748803735516,"Terrain","Football, Basketball"],
      [-6.866530476550191,33.98462498390422,"Buvette","Avec salle de jeu"],
      [-6.866530476550191,33.98462498390422,"Shop"," "]
    ];
    let graphics;
     for(let i=0;i<3;i++) {
      const point = {
        type: "point",
        longitude: infoLayer[i][0],
        latitude: infoLayer[i][1],
      };

      const symbol = {
        type: "simple-marker",
        color: 'white',
        size: 10,
      };
      
       graphics = new Graphic({
        geometry: point,
        symbol: symbol,
        attributes: {
          Nom: infoLayer[i][2],
          Description: infoLayer[i][3],
        },
        // popupTemplate:{
        //       title:infoLayer[i][2],
        //       content: "<button>click</button>"
        //   }
      });
      layer.add(graphics);

      View.on("click", (e) => {
        View.hitTest(e).then((rep) => {
          if (rep.results.length > 0) {
            setAttribute({
              name: rep.results[0].graphic.attributes.name,
              description: rep.results[0].graphic.attributes.description
            });
            handleClickOpen();
          }
        });
      });
    }
    
    
  }, [View]);

  return <Popup 
  open={handleClickOpen} 
  close={handleClose} 
  navigate={navigateTo}
  varOpen={open}
  attribute={attribute}/>; // La couche sera ajoutée à la carte dans le composant Map
};

export default Layer;