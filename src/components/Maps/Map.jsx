/** @module Map */

import React from "react";
import customsMap from "./mapimages/customs.jpg";
import shorelineMap from "./mapimages/shoreline.jpg";
import factoryMap from "./mapimages/factory.jpg";
import woodsMap from "./mapimages/woods.jpg";
import reserveMap from "./mapimages/reserve.jpg";
import interchangeMap from "./mapimages/interchange.jpg";
import lighthouseMap from "./mapimages/lighthouse.jpg";
import labsMap from "./mapimages/labs.jpg";
import "./styles/map.scss";

const Map = props => {
  const { currentMap } = props;
  const allMaps = {
    Customs: customsMap,
    Shoreline: shorelineMap,
    Factory: factoryMap,
    Woods: woodsMap,
    Reserve: reserveMap,
    Interchange: interchangeMap,
    Lighthouse: lighthouseMap,
    Labs: labsMap
  };
  return (
    <div className="mapContainer">
      <img src={allMaps[currentMap]} alt="NO MAP" />
    </div>
  );
};

export default Map;
