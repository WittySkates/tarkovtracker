/** @module ToggleButton */
import React from "react";
import CollapseIcon from "./CollapseIcon";
import ExpandIcon from "./ExpandIcon";
import "./styles/togglebutton.scss";

const ToggleButton = ({ onClick, isCollapsed }) => {
  return (
    <button onClick={onClick} className="toggle-button">
      {isCollapsed ? <ExpandIcon /> : <CollapseIcon />}
    </button>
  );
};

export default ToggleButton;
