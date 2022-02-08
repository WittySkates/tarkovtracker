import React from "react";
import PropTypes from "prop-types";
import { openMiniature, closeMiniature } from "./miniature";
import IconArrow from "./icon-arrow";
import { POSITION_RIGHT, POSITION_LEFT } from "react-svg-pan-zoom";
import { colors } from "../../../../constants";

export default function MiniatureToggleButton({ value, onChangeValue, position }) {
  let style = {
    width: "30px",
    height: "30px",
    display: "block",
    position: "absolute",
    bottom: 0,
    [position === POSITION_LEFT ? "left" : "right"]: "0px",
    background: "white", //rgba(19, 20, 22, 0.901961)
    border: 0,
    padding: 0,
    outline: 0,
    color: "#fff",
    borderRadius: "4px"
  };

  let action = value.miniatureOpen ? closeMiniature : openMiniature;

  return (
    <button type="button" style={style} onClick={() => onChangeValue(action(value))}>
      <IconArrow open={value.miniatureOpen} position={position} style={{ bottom: "5px" }} />
    </button>
  );
}

MiniatureToggleButton.propTypes = {
  value: PropTypes.object.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  position: PropTypes.oneOf([POSITION_RIGHT, POSITION_LEFT]).isRequired
};
