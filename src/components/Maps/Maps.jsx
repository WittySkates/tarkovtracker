/** @module Maps */

import React, { useState } from "react";
import Map from "./Map";
import TemporaryDrawer from "./TemporaryDrawer";
import MUINav from "../MUINav/MUINav";
import "./styles/maps.scss";

const Maps = () => {
  const [currentLocation, setCurrentLocation] = useState("Customs");
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <TemporaryDrawer
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
        setCurrentValue={setCurrentLocation}
        currentValue={currentLocation}
      />
      {/* <div className="mapNavContainer">
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
          setCurrentValue={setCurrentLocation}
          currentValue={currentLocation}
        />
      </div> */}
      <Map currentLocation={currentLocation} />
    </div>
  );
};

export default Maps;
