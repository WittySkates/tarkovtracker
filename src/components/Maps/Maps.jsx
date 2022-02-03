/** @module Maps */

import React, { useState } from "react";
import Map from "./Map";
import MUINav from "../MUINav/MUINav";
import "./styles/maps.scss";

const Maps = () => {
  const [currentLocation, setCurrentMap] = useState("Customs");
  return (
    <>
      <div className="mapNavContainer">
        <MUINav
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
          setCurrentValue={setCurrentMap}
          currentValue={currentLocation}
        />
      </div>
      <Map currentLocation={currentLocation} />
    </>
  );
};

export default Maps;
