/** @module Node */

import React from "react";
import "./styles/tree.scss";
import { CloseButton } from "react-bootstrap";
const Node = props => {
  const { nodeDatum, toggleNode, foreignObjectProps, traderName } = props;

  return (
    <>
      <g>
        {/* `foreignObject` requires width & height to be explicitly set. */}

        <foreignObject {...foreignObjectProps}>
          <div className={`node-container ${traderName}`}>
            <p>{nodeDatum.name}</p>
            {nodeDatum.children.length > 0 &&
              (nodeDatum.__rd3t.collapsed ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-down collapse-button"
                  viewBox="0 0 16 16"
                  onClick={toggleNode}
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-arrow-up"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  onClick={toggleNode}
                >
                  <path
                    fill-rule="evenodd"
                    style={{ width: "100%", height: "100%" }}
                    d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                  />
                </svg>
              ))}
          </div>
        </foreignObject>
      </g>
    </>
  );
};

export default Node;
