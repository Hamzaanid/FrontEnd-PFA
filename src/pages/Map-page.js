import React, { useRef, useEffect, useState } from "react";
import "@arcgis/core/assets/esri/themes/light/main.css";

import config from "@arcgis/core/config";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer.js";


// import LayerCompenent from "../Compenents/MapComponent/LayerCompenent.js";
import LayerGrapicsWidget from "../Compenents/MapComponent/LayerGrapicsWidget.js";
import LayerGraphicsParking from "../Compenents/MapComponent/LayerGraphicsParking.js";
import LayerGraphicsServices from "../Compenents/MapComponent/LayerGraphicsServices.js";
import LayerGraphicsAdministration from "../Compenents/MapComponent/LayerGraphicsAdministration.js";
import LayerGraphicsClasses from "../Compenents/MapComponent/LayerGraphicsClasses.js";
function MapService() {
  const mapDiv = useRef(null);
  const [View, SetView] = useState(null);
  config.apiKey = "AAPKca36a0ff3992440bb73cca7b51712e50KZ2zwllUWtjPO0yhJmR7EYq6N5wDocfZzBDhRh7F5WyAtfuZ0fBgPiO8FB3a_fxe";
  
  useEffect(() => {
    
    const layerInternat = new GraphicsLayer({
      id: "internat",
    });
    const layerParking = new GraphicsLayer({
      id: "parking",
    });
    const layerClasses = new GraphicsLayer({
      id: "classes",
    });
    const layerServices = new GraphicsLayer({
      id: "Services",
    });
    const layerAdministration = new GraphicsLayer({
      id: "Administration",
    });
    // test 
    
    new MapView({
      container: mapDiv.current,
      map: new Map({
        basemap: "arcgis-imagery",
        layers: [layerInternat, layerParking,layerClasses,layerServices,layerAdministration],
      }),
      center: [ -6.867727066,33.98306101],
      zoom: 18,
    }).when((view) => {
      SetView(view);
      
    });
    

  }, []);

  return (
    <div ref={mapDiv} style={{ height: "100vh", width: "100%" }}>
      {
      View 
       &&
       <>
          <LayerGraphicsParking View={View} />
          <LayerGrapicsWidget  View={View}/>
                    
          <LayerGraphicsAdministration  View={View}/>
          <LayerGraphicsClasses  View={View}/>
          
          <LayerGraphicsServices View={View} />
       </>
       
       }
    </div>
  );
}
//jjj
export default MapService;