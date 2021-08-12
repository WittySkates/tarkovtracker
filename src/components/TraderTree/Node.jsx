/** @module Node */

import React, { useState, useEffect } from "react";
import "./styles/tree.scss";
import ToggleButton from "../ToggleButton/ToggleButton";
import Checkbox from "../Checkbox/Checkbox";
import SignInPopup from "../Popups/SignInPopup";
import { PopoutIcon } from "../Icons/Icons";
import { getAllPreviousQuests } from "./utils/treeUtils";
import QuestPopup from "../Popups/QuestPopup";

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
  const [isSignInDialogOpen, setIsSignInDialogOpen] = useState(false);
  const [isQuestDialogOpen, setIsQuestDialogOpen] = useState(false);

  const nodeRef = database.ref(
    `users/${uid}/completedQuests/${nodeDatum.name}`
  );

  useEffect(() => {
    if (uid && isSignInDialogOpen) setIsSignInDialogOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uid]);

  useEffect(() => {
    nodeRef.on("value", snapshot => {
      const data = snapshot.val();
      if (data !== null && data !== undefined) setIsChecked(data);
    });
  }, [nodeRef]);

  const updateDatabase = () => {
    if (uid) {
      const priors = {};
      getAllPreviousQuests(nodeDatum.name, traderName, priors);
      // console.log(priors);
      if (!isChecked) {
        database.ref(`users/${uid}/completedQuests`).update(priors);
      }
      database.ref(`users/${uid}/completedQuests`).update({
        [nodeDatum.name]: !isChecked,
      });
    }
  };
  return (
    <>
      <g>
        <foreignObject className="node-obj" {...foreignObjectProps}>
          <div className={`node-container ${traderName}`}>
            <p>{nodeDatum.name}</p>
            {nodeDatum.attributes?.Objectives.length > 0 && (
              <Checkbox
                isChecked={isChecked}
                onChange={() => {
                  if (!uid) {
                    setIsSignInDialogOpen(true);
                  }
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
              <PopoutIcon
                onClick={() => setIsQuestDialogOpen(true)}
                className="link-icon"
              />
            )}
            <QuestPopup
              title={nodeDatum.name}
              text="hello world"
              isOpen={isQuestDialogOpen}
              handleClose={() => setIsQuestDialogOpen(false)}
            />
            <SignInPopup
              isOpen={isSignInDialogOpen}
              handleClose={() => setIsSignInDialogOpen(false)}
            />
          </div>
        </foreignObject>
      </g>
    </>
  );
};

export default Node;
