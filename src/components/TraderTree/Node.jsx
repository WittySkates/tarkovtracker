/** @module Node */

import React, { useState, useEffect } from "react";
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
  const [isChecked, setIsChecked] = useState(false);

  const nodeRef = database.ref(
    `users/${uid}/completedQuests/${nodeDatum.name}`
  );

  useEffect(() => {
    nodeRef.on("value", snapshot => {
      const data = snapshot.val();
      if (data !== null && data !== undefined) setIsChecked(data);
    });
  }, [nodeRef]);

  const updateDatabase = () => {
    if (uid) {
      const prev = [];
      if (!isChecked) {
      }
      database.ref(`users/${uid}/completedQuests`).update({
        [nodeDatum.name]: !isChecked,
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
              <Checkbox
                isChecked={isChecked}
                onChange={() => {
                  updateDatabase();
                }}
              />
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
