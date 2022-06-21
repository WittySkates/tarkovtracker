/** @module Maps */

import React from "react";
import { connect } from "react-redux";
import Map from "./Map";
import TemporaryDrawer from "./TemporaryDrawer";
import MUINav from "../MUINav/MUINav";
import "./styles/maps.scss";

const mapStateToProps = state => {
  return { currentLocation: state.drawerState.location };
};

const Maps = props => {
  const {currentLocation} = props
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
        currentLocation={currentLocation}
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

export default connect(mapStateToProps)(Maps);
