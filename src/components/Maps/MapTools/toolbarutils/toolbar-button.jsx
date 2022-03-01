import React, { useState } from "react";
import PropTypes from "prop-types";
import { POSITION_TOP, POSITION_BOTTOM } from "../constants";

const ToolbarButton = props => {
  const { toolbarPosition, active, activeColor, name, title, onClick } = props;

  const [state, setState] = useState({ hover: false });

  const change = event => {
    event.preventDefault();
    event.stopPropagation();

    switch (event.type) {
      case "mouseenter":
      case "touchstart":
        setState({ hover: true });
        break;
      case "mouseleave":
      case "touchend":
      case "touchcancel":
        setState({ hover: false });
        break;
      default:
      //noop
    }
  };

  let style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40px",
    height: "40px",
    color: active ? activeColor : state.hover ? "#ffffffb4" : "#ffffff93",
    transition: "color 200ms ease",
    background: "currentColor", //background: "none",
    borderRadius: "4px",
    padding: "0px",
    border: "0px",
    outline: "0px",
    cursor: "pointer"
  };

  return (
    <button
      onMouseEnter={event => change(event)}
      onMouseLeave={event => change(event)}
      onTouchStart={event => {
        change(event);
        onClick(event);
      }}
      onTouchEnd={event => change(event)}
      onTouchCancel={event => change(event)}
      onClick={onClick}
      style={style}
      title={title}
      name={name}
      type="button"
    >
      {props.children}
    </button>
  );
};

ToolbarButton.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  toolbarPosition: PropTypes.string.isRequired,
  activeColor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
};

export default ToolbarButton;
