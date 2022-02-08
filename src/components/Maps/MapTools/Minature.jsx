/** @module MapSelector */

import React from "react";
import PropTypes from "prop-types";
import { POSITION_LEFT, POSITION_RIGHT } from "react-svg-pan-zoom";
import MiniatureToggleButton from "./minatureutils/MinatureToggleButton";
// import { colors } from "../../constants";

const MapSelector = props => {
  const {
    value,
    onChangeValue,
    children,
    position,
    background,
    SVGBackground,
    width: miniatureWidth,
    height: miniatureHeight,
    currentMap,
    setCurrentMap,
    locationMaps
  } = props;

  const style = {
    display: "flex",
    gap: "10px",
    position: "absolute",
    overflow: "hidden",
    outline: "1px solid rgba(19, 20, 22, 0.90)",
    transition: "width 200ms ease, height 200ms ease, bottom 200ms ease",
    width: value.miniatureOpen ? (miniatureWidth + 10) * locationMaps.length - 10 : "30px", // value.miniatureOpen ? (miniatureWidth + 10) * locationMaps.length - 10 : "24px",
    height: value.miniatureOpen ? miniatureHeight : "30px",
    bottom: "10px",
    [position === POSITION_LEFT ? "left" : "right"]: "8px",
    background
  };

  const changeMap = newMap => {
    setCurrentMap(newMap);
  };
  return (
    <div role="navigation" style={style} className="miniContainer">
      {locationMaps.map((mapData, index) => (
        <svg width={miniatureWidth} height={miniatureHeight} key={mapData.map}>
          <rect
            width={miniatureWidth}
            height={miniatureHeight}
            fill="transparent"
            // stroke={`${currentMap === index ? "none" : colors.navColor}`}
            // strokeWidth={5}
            // fill={`${currentMap === index ? colors.navColor : colors.navColor}`}
          />
          <image
            width={miniatureWidth}
            height={miniatureHeight}
            href={mapData.map}
            onClick={() => changeMap(index)}
          />
        </svg>
      ))}
      <MiniatureToggleButton value={value} onChangeValue={onChangeValue} position={position} />
    </div>
  );
};

MapSelector.propTypes = {
  value: PropTypes.object.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  SVGBackground: PropTypes.string.isRequired,

  //customizations
  position: PropTypes.oneOf([POSITION_RIGHT, POSITION_LEFT]),
  background: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

MapSelector.defaultProps = {
  position: POSITION_LEFT,
  background: "#616264",
  width: 100,
  height: 80
};

export default MapSelector;
