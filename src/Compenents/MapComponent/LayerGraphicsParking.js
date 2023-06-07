// cette page pour integrer les donner de chaque layer (internat,class,...)
import  React,{ useEffect,useState } from "react";
import Graphic from "@arcgis/core/Graphic";
// import FeatureLayerfrom from "@arcgis/core/layers/FeatureLayer";
// import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import { useNavigate } from 'react-router-dom';
import Popup2 from "../widget/popupParking.js";
import img from "./logopark.png";


const Layer = ({ View }) => {
  const navigate = useNavigate();
  const [attribute, setAttribute] = useState({
    name: "",
    nombre_de_place_disponible: "",
  });
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const navigateTo = () => {
    handleClose();
    return navigate("/PageParking");
  }

  useEffect(() => {
    const layer = View.map.findLayerById("parking");
    const infoLayer = [
      [-6.868751, 33.984155, "parking", "Parking 1"],
      [-6.868573256476219, 33.98406941137575, "parking", "Parking 2"],
      [-6.868371, 33.984442, "parking", "Parking 3"],
      [-6.868138, 33.984335, "parking", "Parking 4"],
      [-6.867323, 33.984095, "parking", "Parking 5"]
    ];
    let graphics;
    for (let i = 0; i < 5; i++) {
      const point = {
        type: "point",
        longitude: infoLayer[i][0],
        latitude: infoLayer[i][1],
      };

      const symbol = {
        type: "picture-marker",
        url: img
      };

      graphics = new Graphic({
        geometry: point,
        symbol: symbol,
        attributes: {
          name: infoLayer[i][2],
          nombre_de_place_disponible: infoLayer[i][3],
        },
      });

      layer.add(graphics);

      View.on("click", (e) => {
        View.hitTest(e).then((rep) => {
          if (rep.results.length > 0 && rep.results[0].layer.id === 'parking') {
            console.log(rep)
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

  return <Popup2 
  open={handleClickOpen} 
  close={handleClose} 
  navigate={navigateTo}
  varOpen={open}
  attribute={attribute}/>; // La couche sera ajoutée à la carte dans le composant Map
};

export default Layer;

