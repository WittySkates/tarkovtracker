import React from "react";
import PropTypes from "prop-types";
import {
  TOOL_NONE,
  TOOL_PAN,
  TOOL_ZOOM_IN,
  TOOL_ZOOM_OUT,
  POSITION_TOP,
  POSITION_RIGHT,
  POSITION_BOTTOM,
  POSITION_LEFT,
  ALIGN_CENTER,
  ALIGN_LEFT,
  ALIGN_RIGHT,
  ALIGN_TOP,
  ALIGN_BOTTOM
} from "./constants";

import { fitToViewer } from "./minatureutils/zoom";
import ToolbarButton from "./toolbarutils/toolbar-button";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import PanToolIcon from "@mui/icons-material/PanTool";
import RoomIcon from "@mui/icons-material/Room";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import { colors } from "../../../constants";

const Toolbar = props => {
  const {
    tool,
    value,
    onChangeValue,
    onChangeTool,
    activeToolColor,
    position,
    SVGAlignX,
    SVGAlignY
  } = props;

  let handleChangeTool = (event, newTool) => {
    if (tool === newTool) newTool = "pan";
    onChangeTool(newTool);
    event.stopPropagation();
    event.preventDefault();
  };

  let handleFit = event => {
    onChangeValue(fitToViewer(value, SVGAlignX, SVGAlignY));
    event.stopPropagation();
    event.preventDefault();
  };

  let style = {
    position: "absolute",
    transform:
      [POSITION_TOP, POSITION_BOTTOM].indexOf(position) >= 0 ? "translate(-120%, 0%)" : "none",
    top: [POSITION_LEFT, POSITION_RIGHT, POSITION_TOP].indexOf(position) >= 0 ? "5px" : "unset",
    left:
      [POSITION_TOP, POSITION_BOTTOM].indexOf(position) >= 0
        ? "100%"
        : POSITION_LEFT === position
        ? "5px"
        : "unset",
    right: [POSITION_RIGHT].indexOf(position) >= 0 ? "5px" : "unset",
    bottom: [POSITION_BOTTOM].indexOf(position) >= 0 ? "5px" : "unset",
    //inner styling
    backgroundColor: "transparent",
    borderRadius: "4px",
    display: "flex",
    gap: "10px",
    flexDirection: "column",
    marginBottom: "5px"
  };

  return (
    <div style={style} role="toolbar">
      <ToolbarButton
        toolbarPosition={position}
        active={tool === TOOL_NONE}
        activeColor={activeToolColor}
        name="unselect-tools"
        title="Selection"
        onClick={event => handleChangeTool(event, TOOL_NONE)}
      >
        <RoomIcon style={{ color: tool === TOOL_NONE ? "black" : "#00000093" }} />
      </ToolbarButton>

      {/* <ToolbarButton
        toolbarPosition={position}
        active={tool === TOOL_PAN}
        activeColor={activeToolColor}
        name="select-tool-pan"
        title="Pan"
        onClick={event => handleChangeTool(event, TOOL_PAN)}
      >
        <PanToolIcon style={{ color: "black" }} />
      </ToolbarButton> */}

      <ToolbarButton
        toolbarPosition={position}
        active={tool === TOOL_ZOOM_IN}
        activeColor={activeToolColor}
        name="select-tool-zoom-in"
        title="Zoom in"
        onClick={event => handleChangeTool(event, TOOL_ZOOM_IN)}
      >
        <ZoomInIcon style={{ color: tool === TOOL_ZOOM_IN ? "black" : "#00000093" }} />
      </ToolbarButton>

      <ToolbarButton
        toolbarPosition={position}
        active={tool === TOOL_ZOOM_OUT}
        activeColor={activeToolColor}
        name="select-tool-zoom-out"
        title="Zoom out"
        onClick={event => handleChangeTool(event, TOOL_ZOOM_OUT)}
      >
        <ZoomOutIcon style={{ color: tool === TOOL_ZOOM_OUT ? "black" : "#00000093" }} />
      </ToolbarButton>

      <ToolbarButton
        toolbarPosition={position}
        active={false}
        activeColor={activeToolColor}
        name="fit-to-viewer"
        title="Fit to viewer"
        onClick={event => handleFit(event)}
      >
        <ZoomOutMapIcon style={{ color: "black" }} />
      </ToolbarButton>
    </div>
  );
};

Toolbar.propTypes = {
  tool: PropTypes.string.isRequired,
  onChangeTool: PropTypes.func.isRequired,
  value: PropTypes.object.isRequired,
  onChangeValue: PropTypes.func.isRequired,

  //customizations
  position: PropTypes.oneOf([POSITION_TOP, POSITION_RIGHT, POSITION_BOTTOM, POSITION_LEFT]),
  SVGAlignX: PropTypes.oneOf([ALIGN_CENTER, ALIGN_LEFT, ALIGN_RIGHT]),
  SVGAlignY: PropTypes.oneOf([ALIGN_CENTER, ALIGN_TOP, ALIGN_BOTTOM]),
  activeToolColor: PropTypes.string
};

Toolbar.defaultProps = {
  position: POSITION_BOTTOM,
  SVGAlignX: ALIGN_LEFT,
  SVGAlignY: ALIGN_TOP,
  activeToolColor: "#ffffff"
};

export default Toolbar;
