import React, { useEffect, useState } from "react";
import { loadModules } from "esri-loader";

const MapPoint = ({ view }) => {
  const [graphics, setGraphics] =  ([]);
  const [selectedGraphic, setSelectedGraphic] = useState(null);

  useEffect(() => {
    loadModules([
      "esri/Graphic",
      "esri/layers/GraphicsLayer",
      "esri/symbols/SimpleMarkerSymbol",
      "esri/PopupTemplate"
    ]).then(([Graphic, GraphicsLayer, SimpleMarkerSymbol, PopupTemplate]) => {
      const graphicsLayer = new GraphicsLayer({ id: "map-point-layer" });
      view.map.add(graphicsLayer);

      const points = [
        {
          id: 1,
          name: "Point 1",
          latitude: 40.7128,
          longitude: -74.006
        },
        {
          id: 2,
          name: "Point 2",
          latitude: 41.8781,
          longitude: -87.6298
        },
        {
          id: 3,
          name: "Point 3",
          latitude: 34.0522,
          longitude: -118.2437
        }
      ];

      const markerSymbol = new SimpleMarkerSymbol({
        color: [226, 119, 40],
        outline: {
          color: [255, 255, 255],
          width: 1
        }
      });

      const popupTemplate = new PopupTemplate({
        title: "{name}",
        content: "{latitude}, {longitude}"
      });

      const pointGraphics = points.map(point => {
        const pointGeometry = {
          type: "point",
          latitude: point.latitude,
          longitude: point.longitude
        };

        const pointGraphic = new Graphic({
          geometry: pointGeometry,
          symbol: markerSymbol,
          attributes: {
            id: point.id,
            name: point.name,
            latitude: point.latitude,
            longitude: point.longitude
          },
          popupTemplate: popupTemplate
        });

        return pointGraphic;
      });

      graphicsLayer.addMany(pointGraphics);
      setGraphics(pointGraphics);

      const clickHandler = view.on("click", event => {
        view.hitTest(event).then(response => {
          const graphic = response.results[0].graphic;

          if (graphic) {
            setSelectedGraphic(graphic);
          }
        });
      });

      return () => {
        clickHandler.remove();
        view.map.remove(graphicsLayer);
      };
    });
  }, [view]);

  const handleButtonClick = () => {
    // Do something when button is clicked
  };

  return (
    <div>
      {selectedGraphic && (
        <div className="popup-container">
          <div className="popup-header">{selectedGraphic.attributes.name}</div>
          <div className="popup-content">{selectedGraphic.attributes.latitude}, {selectedGraphic.attributes.longitude}</div>
          <button onClick={handleButtonClick}>Click Me</button>
        </div>
      )}
    </div>
  );
};

export default MapPoint;
