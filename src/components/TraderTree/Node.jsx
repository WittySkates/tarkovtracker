/** @module Node */

import React from "react";
import "./styles/tree.scss";

const Node = ({ nodeDatum, toggleNode, foreignObjectProps }) => {
  return (
    <>
      <g>
        <circle r={15}></circle>
        {/* `foreignObject` requires width & height to be explicitly set. */}
        <foreignObject {...foreignObjectProps}>
          <div className="node-container">
            <p>{nodeDatum.name}</p>
            {nodeDatum.children.length > 0 && (
              <button className="collapse-button" onClick={toggleNode}>
                {nodeDatum.__rd3t.collapsed ? "V" : "^"}
              </button>
            )}
          </div>
        </foreignObject>
      </g>
    </>
  );
};

export default Node;

/* <g>
<foreignObject
  width="150"
  height="150"
  x="0"
  y="-30"
  onClick={toggleNode}
>
  <div className="node-conatiner">
    <p>{nodeDatum.name}</p>
    {nodeDatum.attributes?.type && (
      <text fill="black" x="20" dy="20" strokeWidth="1">
        Type: {nodeDatum.attributes?.type}
      </text>
    )}
  </div>
</foreignObject>
</g>  */
