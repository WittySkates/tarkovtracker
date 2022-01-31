/** @module Maps */

import React, { useState } from "react";
import GeneralNav from "../GeneralNav/GeneralNav";
import Map from "./Map";
import "./styles/maps.scss";

const Maps = () => {
  const [currentMap, setCurrentMap] = useState("Customs");
  console.log(currentMap);
  return (
    <>
      <GeneralNav
        navArray={[
          "Customs",
          "Shoreline",
          "Factory",
          "Woods",
          "Reserve",
          "Interchange",
          "Lighthouse",
          "Labs"
        ]}
        className="mapNav"
        setCurrentValue={setCurrentMap}
        currentValue={currentMap}
      />
      <Map currentMap={currentMap} />
    </>
  );
};

export default Maps;
