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
  const [open, setOpen] = useState(false);

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
    const layer = View.map.findLayerById("Administration");
    const infoLayer = [
      [-6.867908629781935,33.984051565840105,"Bureau de scolarité","Service adminisratif pour les étudiants "],
      [-6.867908629781935,33.984051565840105,"Direction","Service gestion"]
    ];
    let graphics;
     for(let i=0;i<2;i++) {
      const point = {
        type: "point",
        longitude: infoLayer[i][0],
        latitude: infoLayer[i][1],
      };

      const symbol = {
        type: "simple-marker",
        color: 'black',
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
              Nom: rep.results[0].graphic.attributes.Nom,
              Description: rep.results[0].graphic.attributes.Description
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