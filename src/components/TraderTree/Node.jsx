/** @module Node */

import React from "react";
import "./styles/tree.scss";
import ToggleButton from "../ToggleButton/ToggleButton";
import Checkbox from "../Checkbox/Checkbox";
import { HyperLinkIcon } from "../Icons/Icons";

const Node = props => {
  const {
    nodeDatum,
    toggleNode,
    foreignObjectProps,
    traderName,
    database,
    uid,
  } = props;

  const updateDatabase = () => {
    if (uid) {
      database.ref("users/" + uid).update({
        completedQuest: nodeDatum.name,
      });
    }
  };
  return (
    <>
      <g>
        {/* `foreignObject` requires width & height to be explicitly set. */}

        <foreignObject className="node-obj" {...foreignObjectProps}>
          <div className={`node-container ${traderName}`}>
            <p>{nodeDatum.name}</p>
            {nodeDatum.attributes?.Objectives.length > 0 && (
              <Checkbox onChange={() => updateDatabase()} />
            )}
            {nodeDatum.children.length > 0 && (
              <ToggleButton
                onClick={toggleNode}
                isCollapsed={nodeDatum.__rd3t.collapsed}
                className="toggle-button"
              />
            )}
            {nodeDatum?.attributes?.link && (
              <HyperLinkIcon
                onClick={() => window.open(nodeDatum?.attributes?.link)}
                className="link-icon"
              />
            )}
          </div>
        </foreignObject>
      </g>
    </>
  );
};

export default Node;
