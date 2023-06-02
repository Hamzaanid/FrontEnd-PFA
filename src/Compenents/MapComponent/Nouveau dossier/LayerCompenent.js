// pour colorer une zone 
import { useEffect } from "react";
import Graphic from "@arcgis/core/Graphic";
import Polygon from "@arcgis/core/geometry/Polygon.js";
function GraphicsCompenent({ View }) {
  
  useEffect(() => {
    const layer = View.map.findLayerById("internat");
    const ensiasPolygon = new Polygon({
      rings: [
        [-6.857928, 33.974885],
        [-6.857689, 33.975205],
        [-6.858069, 33.975368],
        [-6.858324, 33.975051],
        [-6.857928, 33.974885]
      ],
      spatialReference: { wkid: 4326 }
    });
    
    if (layer) {
      const pointGraphic = new Graphic({
        geometry: {
          type: "point",
          latitude: 35,
          longitude: 36,
        },
        symbol: {
          type: "simple-marker",
          color: [226, 119, 40],
          size: 10,
        },
        attributes: {
          name: "Point",
          description: "I am a point",
        },
        popupTemplate:{
            title:"internat",
            content:"interan graphics"
        }
      });
      layer.add(pointGraphic);
      const polygonGraphic = new Graphic({
        geometry: ensiasPolygon,
        symbol: {
          type: 'simple-fill',
          color: [0, 0, 255, 0.5], // Bleu transparent
          outline: {
            color: [0, 0, 255, 1], // Bleu opaque
            width: 2
          }
        }
      });
      layer.add(polygonGraphic);
    }
    
    
  });

  return null;
}
export default GraphicsCompenent;
