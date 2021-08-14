/** @module Node */

import React, { useState, useEffect } from "react";
import "./styles/tree.scss";
import ToggleButton from "../ToggleButton/ToggleButton";
import Checkbox from "../Checkbox/Checkbox";
import SignInPopup from "../Popups/SignInPopup";
import { CheckAllIcon, PopoutIcon, UnCheckAllIcon } from "../Icons/Icons";
import { getAllPreviousQuests } from "./utils/treeUtils";
import QuestPopup from "../Popups/QuestPopup";
import QuestCount from "../QuestCount/QuestCount";
import _ from "lodash";

const Node = props => {
  const {
    nodeDatum,
    toggleNode,
    foreignObjectProps,
    traderName,
    database,
    uid,
    doneCount,
  } = props;
  const [isChecked, setIsChecked] = useState(false);
  const [isSignInDialogOpen, setIsSignInDialogOpen] = useState(false);
  const [isQuestDialogOpen, setIsQuestDialogOpen] = useState(false);

  const nodeRef = database.ref(
    `users/${uid}/completedQuests/${traderName}/${nodeDatum.name}`
  );

  useEffect(() => {
    if (uid && isSignInDialogOpen) setIsSignInDialogOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uid]);

  useEffect(() => {
    if (uid) {
      nodeRef.on("value", snapshot => {
        const data = snapshot.val();
        if (data !== null && data !== undefined) {
          setIsChecked(data);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nodeRef]);

  const updateDatabase = () => {
    if (uid) {
      const priors = {};
      getAllPreviousQuests(nodeDatum.name, traderName, priors);
      if (!isChecked) {
        database
          .ref(`users/${uid}/completedQuests/${traderName}`)
          .update(priors);
      }
      database.ref(`users/${uid}/completedQuests/${traderName}`).update({
        [nodeDatum.name]: !isChecked,
      });
    }
  };
  const checkAllQuests = bool => {
    if (!uid) {
      setIsSignInDialogOpen(true);
      return;
    }
    const quests = JSON.parse(localStorage.getItem("tarkov-traderQuests"));
    // const traderQuests1 = quests[traderName]["Quests"];
    const traderQuests = Object.keys(quests[traderName]["Quests"]);
    const trueArray = Array(traderQuests.length).fill(bool);
    const allQuestsTrue = _.zipObject(traderQuests, trueArray);
    database
      .ref(`users/${uid}/completedQuests/${traderName}`)
      .update(allQuestsTrue);
  };

  const checkboxOnChange = () => {
    if (!uid) {
      setIsSignInDialogOpen(true);
    }
    updateDatabase();
  };

  return (
    <>
      <g>
        <foreignObject className="node-obj" {...foreignObjectProps}>
          <div className={`node-container ${traderName}`}>
            <p>{nodeDatum.name}</p>
            {nodeDatum.name === traderName && (
              <>
                <QuestCount count={doneCount} trader={traderName} />
                <CheckAllIcon
                  className="checkall-icon"
                  onClick={() => {
                    checkAllQuests(true);
                  }}
                />
                <UnCheckAllIcon
                  className={"uncheckall-icon"}
                  onClick={() => checkAllQuests(false)}
                />
              </>
            )}
            {nodeDatum.attributes?.Objectives.length > 0 && (
              <Checkbox
                className="node-checkbox"
                isChecked={isChecked}
                onChange={checkboxOnChange}
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
                className="popup-icon"
              />
            )}
            <QuestPopup
              checkboxOnChange={checkboxOnChange}
              isChecked={isChecked}
              data={nodeDatum}
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
