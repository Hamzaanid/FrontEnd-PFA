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
    Capacite: "",
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
    const layer = View.map.findLayerById("classes");
    const infoLayer = [
      [-6.867914,33.983882,"Grand Amphi","300"],
      [-6.867176938628826,33.98462655687084,"Amphi 1","50"],
      [-6.867176938628826,33.984673261999745,"Amphi 2","50"],
      [-6.8669838540580495,33.984996774464925,"Amphi3","100"],
      [-6.866744466901814,33.98488112406281,"Amphi 4","100"],
      [-6.867091142418836,33.98483330702281,"Salles AGoRA 1","25"],
      [-6.866885282875744,33.98476380546303,"Salles AGoRA 2","25"],
      [-6.867429,33.984476,"Salles TP","30"]
    ];
    let graphics;
     for(let i=0;i<8;i++) {
      const point = {
        type: "point",
        longitude: infoLayer[i][0],
        latitude: infoLayer[i][1],
      };

      const symbol = {
        type: "simple-marker",
        color: 'bleu',
        size: 10,
      };
      
       graphics = new Graphic({
        geometry: point,
        symbol: symbol,
        attributes: {
          Name: infoLayer[i][2],
          Capacite: infoLayer[i][3],
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
              capacite: rep.results[0].graphic.attributes.Capacite
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