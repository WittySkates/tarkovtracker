import React from "react";
import PropTypes from "prop-types";
import { POSITION_RIGHT, POSITION_LEFT } from "../constants";

//credits https://materialdesignicons.com/icon/chevron-up

export default function IconArrow({ open, position }) {
  let transform = 0;

  switch (position) {
    case POSITION_LEFT:
      transform = open ? "rotate(225, 11, 12)" : "rotate(45, 17, 11)";
      break;

    case POSITION_RIGHT:
      transform = transform = open ? "rotate(135, 12, 11)" : "rotate(-45, 8, 12)";
      break;

    default:
    //no op
  }

  return (
    <svg width={24} height={24}>
      <g transform={transform}>
        <path fill="black" d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
      </g>
    </svg>
  );
}

IconArrow.propTypes = {
  open: PropTypes.bool.isRequired,
  position: PropTypes.oneOf([POSITION_RIGHT, POSITION_LEFT]).isRequired
};
