/** @module Node */

import React from "react";
import "./styles/tree.scss";
import ToggleButton from "../ToggleButton/ToggleButton";

const Node = props => {
  const { nodeDatum, toggleNode, foreignObjectProps, traderName } = props;

  return (
    <>
      <g>
        {/* `foreignObject` requires width & height to be explicitly set. */}

        <foreignObject {...foreignObjectProps}>
          <div className={`node-container ${traderName}`}>
            <p>{nodeDatum.name}</p>
            {nodeDatum.children.length > 0 && (
              <ToggleButton
                onClick={toggleNode}
                isCollapsed={nodeDatum.__rd3t.collapsed}
                className={"toggle-button"}
              />
            )}
          </div>
        </foreignObject>
      </g>
    </>
  );
};

export default Node;
