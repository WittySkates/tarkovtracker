/** @module TemporaryDrawer */

import React from "react";
import { useDispatch } from 'react-redux'
import { setDrawerState, setLocationState, setMapState } from "../../redux/slices/mapPageStateSlice";
import { connect } from "react-redux";

import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import tarkovLogo from "./tarkovLogo.png";
import { colors } from "../../constants";
import "./styles/temporarydrawer.scss";

const mapStateToProps = state => {
  return { drawerState: state.drawerState.drawer };
};

const TemporaryDrawer = props => {
  const { navArray, currentLocation, drawerState } = props;
  const dispatch = useDispatch();

  const handleValueChange = newValue => {
    dispatch(setLocationState(newValue));
    dispatch(setMapState(0));
  };

  const toggleDrawer = open => {
    dispatch(setDrawerState(open));
  };

  const drawerStyles = {
    ".MuiDrawer-paper": {
      overflow: "visible",
      visibility: "visible !important",
      marginTop: "56px",
      border: "none"
    }
  };

  const drawerWidth = 400;

  const drawerContent = (
    <div className="drawerContentContainer" style={{ width: drawerWidth }}>
      <div className="drawerCloseContainer" style={{ left: drawerWidth }}>
        <IconButton onClick={() => toggleDrawer(!drawerState)}>
          {drawerState ? (
            <ArrowLeftIcon
              style={{ color: colors.backColor }} //style={{ color: colors.tarkovBrownHighlight, position: "absolute", left: 20, top: 20 }}
            />
          ) : (
            <ArrowRightIcon style={{ color: colors.backColor }} />
          )}
        </IconButton>
      </div>
      <div className="drawerTopImage">
        <img src={tarkovLogo} alt="NO LOGO" />
      </div>

      <div className="contentDivider" />

      <div className="locationSelector">
        {navArray.map(map => (
          <div
            className={`locationNames ${map === currentLocation && "selectedLocation"}`}
            key={map}
            onClick={() => handleValueChange(map)}
          >
            {map}
          </div>
        ))}
      </div>

      <div className="contentDivider" />
    </div>
  );

  return (
    <div style={{ position: "absolute", zIndex: "1000" }}>
      <Drawer variant="persistent" open={drawerState} sx={drawerStyles}>
        {drawerContent}
      </Drawer>
    </div>
  );
};

export default connect(mapStateToProps)(TemporaryDrawer);
