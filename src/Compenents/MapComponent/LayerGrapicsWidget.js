// Layer.js - Composant pour récupérer les données via l'API REST et créer la couche correspondante
import  React,{ useEffect,useState } from "react";
import Graphic from "@arcgis/core/Graphic";
import Popup from "./../widget/popup.js";
// import FeatureLayerfrom from "@arcgis/core/layers/FeatureLayer";
// import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import { useNavigate } from 'react-router-dom';

const Layer = ({View}) => {
  const navigate = useNavigate();
  const [attribute, setAttribute] = useState({
    name: "",
    description: "",
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
    const layer = View.map.findLayerById("internat");
    const infoLayer = [
      [-6.866427856,33.98453723,"Internat","batiment E"],
      [-6.86683231,33.98420395,"Internat","batiment D"],
      [-6.867462076,33.98330739,"Internat","batiment C"],
      [-6.867622205,33.98341169,"Internat","batiment B"],
      [-6.867727066,33.98306101,"Internat","batiment A"]
    ];
    let graphics;
     for(let i=0;i<5;i++) {
      const point = {
        type: "point",
        longitude: infoLayer[i][0],
        latitude: infoLayer[i][1],
      };

      const symbol = {
        type: "simple-marker",
        color: 'red',
        size: 10,
      };
      
       graphics = new Graphic({
        geometry: point,
        symbol: symbol,
        attributes: {
          name: infoLayer[i][2],
          description: infoLayer[i][3],
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

