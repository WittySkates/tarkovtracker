/** @module Node */

import React, { useState, useEffect } from "react";
import SignInPopup from "../Popups/SignInPopup";
import { getAllPreviousQuests } from "./utils/treeUtils";
import QuestPopup from "../Popups/QuestPopup";
import _ from "lodash";
import "./styles/tree.scss";

const Node = props => {
  const { nodeDatum, foreignObjectProps, traderQuests, traderName, database, uid, doneCount } =
    props;
  const [isChecked, setIsChecked] = useState(false);
  const [isSignInDialogOpen, setIsSignInDialogOpen] = useState(false);
  const [isQuestDialogOpen, setIsQuestDialogOpen] = useState(false);

  const nodeRef = database.ref(
    `users/${uid}/completedQuests/${traderName}/${nodeDatum.attributes.id}`
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
      getAllPreviousQuests(nodeDatum.attributes.id, traderQuests, priors);
      if (!isChecked) {
        database.ref(`users/${uid}/completedQuests/${traderName}`).update(priors);
      }
      database.ref(`users/${uid}/completedQuests/${traderName}`).update({
        [nodeDatum.attributes.id]: !isChecked
      });
    }
  };
  const checkAllQuests = bool => {
    if (!uid) {
      setIsSignInDialogOpen(true);
      return;
    }
    const quests = Object.keys(traderQuests);
    const trueArray = Array(quests.length).fill(bool);
    const allQuestsTrue = _.zipObject(quests, trueArray);
    database.ref(`users/${uid}/completedQuests/${traderName}`).update(allQuestsTrue);
  };

  const checkboxOnChange = () => {
    if (!uid) {
      setIsSignInDialogOpen(true);
    }
    updateDatabase();
  };

  return (
    <foreignObject className="node-obj" {...foreignObjectProps}>
      <svg
        viewBox={`0 0 ${foreignObjectProps.width} ${foreignObjectProps.height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Trader vs quest nodes*/}
        {nodeDatum?.name === traderName ? (
          //  Trader node rendering
          <>
            {/* Trader rectangle */}
            <rect
              width={`${foreignObjectProps.width - 20}`}
              height="200"
              x="10"
              rx="19.5"
              className={`all-nodes ${traderName}`}
            />

            {/* Name of node - trader */}
            <foreignObject
              style={{ fill: "none" }}
              width={foreignObjectProps.width - 50}
              height={160}
              x="25"
            >
              <div className="node-title">{nodeDatum?.name}</div>
            </foreignObject>

            {/* Done count */}
            <foreignObject
              style={{ fill: "none" }}
              width={foreignObjectProps.width - 40}
              height={foreignObjectProps.height - 180}
              x="20"
              y="100"
            >
              <div className="done-count">{`${doneCount}/${Object.keys(traderQuests).length}`}</div>
            </foreignObject>
            {/* Check all icon path and hitbox */}
            <svg height="48" width="48" viewBox="0 0 24 24" x="25" y="145">
              <path
                fill="black"
                stroke="none"
                d="M20,2H8A2,2 0 0,0 6,4V16A2,2 0 0,0 8,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M20,16H8V4H20V16M16,20V22H4A2,2 0 0,1 2,20V7H4V20H16M18.53,8.06L17.47,7L12.59,11.88L10.47,9.76L9.41,10.82L12.59,14L18.53,8.06Z"
              />
            </svg>
            <rect
              className="checkbox-icon"
              height="44px"
              width="44px"
              x="25"
              y="145"
              fill="transparent"
              stroke="none"
              onClick={() => checkAllQuests(true)}
            />
            {/* Uncheck all icon path and hitbox */}
            <svg height="48" width="48" viewBox="0 0 24 24" x="350" y="145">
              <path
                fill="black"
                stroke="none"
                d="M20 2H8C6.9 2 6 2.9 6 4V16C6 17.11 6.9 18 8 18H20C21.11 18 22 17.11 22 16V4C22 2.9 21.11 2 20 2M20 16H8V4H20V16M4 6V20H18V22H4C2.9 22 2 21.11 2 20V6H4M9.77 12.84L12.6 10L9.77 7.15L11.17 5.75L14 8.6L16.84 5.77L18.24 7.17L15.4 10L18.23 12.84L16.83 14.24L14 11.4L11.17 14.24L9.77 12.84Z"
              />
            </svg>
            <rect
              className="information-icon"
              height="44px"
              width="44px"
              x="355"
              y="145"
              fill="transparent"
              stroke="none"
              onClick={() => checkAllQuests(false)}
            />
          </>
        ) : (
          // Quest node rendering
          <>
            {/* Quest rectangle */}
            <rect
              width={`${foreignObjectProps.width - 20}`}
              height="220"
              x="10"
              rx="19.5"
              className={`all-nodes ${traderName}`}
            />

            {/* Name of node  - quest*/}
            <foreignObject
              style={{ fill: "none" }}
              width={foreignObjectProps.width - 50}
              height={160}
              x="25"
            >
              <div className="node-title">{nodeDatum?.name}</div>
            </foreignObject>

            {/* Bottom bar */}
            <foreignObject
              style={{ fill: "none" }}
              width={foreignObjectProps.width - 20}
              height={60}
              x="10"
              y="160"
            >
              <div className={`kappa`}>
                Kappa:{" "}
                <div
                  className={
                    nodeDatum.attributes?.kappa
                      ? "green"
                      : nodeDatum.attributes?.kappa === undefined
                      ? "yellow"
                      : "red"
                  }
                >
                  {nodeDatum.attributes?.kappa
                    ? "Yes"
                    : nodeDatum.attributes?.kappa === undefined
                    ? "??? "
                    : "No"}
                </div>
              </div>
            </foreignObject>

            {/* Checkbox icon paths and hitbox */}
            {isChecked ? (
              <svg height="48" width="48" viewBox="0 0 24 24" x="20" y="167">
                <path
                  fill="white"
                  stroke="none"
                  d="M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,5V19H5V5H19M10,17L6,13L7.41,11.58L10,14.17L16.59,7.58L18,9"
                />
              </svg>
            ) : (
              <svg height="48" width="48" viewBox="0 0 24 24" x="20" y="167">
                <path
                  fill="white"
                  stroke="none"
                  d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z"
                />
              </svg>
            )}
            <rect
              className="checkbox-icon"
              height="42"
              width="42"
              x="23"
              y="170"
              rx="5"
              fill="transparent"
              stroke="none"
              onClick={checkboxOnChange}
            />

            {/* Info icon paths and hitbox */}
            <svg height="48" width="48" viewBox="0 0 24 24" x="355" y="167">
              <path
                fill="white"
                stroke="none"
                d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"
              />
            </svg>
            <rect
              className="information-icon"
              height="44px"
              width="44px"
              x="362"
              y="170"
              rx="20"
              fill="transparent"
              stroke="none"
              onClick={() => setIsQuestDialogOpen(true)}
            />
          </>
        )}
      </svg>
      <QuestPopup
        checkboxOnChange={checkboxOnChange}
        isChecked={isChecked}
        data={nodeDatum}
        isOpen={isQuestDialogOpen}
        handleClose={() => setIsQuestDialogOpen(false)}
      />
      <SignInPopup isOpen={isSignInDialogOpen} handleClose={() => setIsSignInDialogOpen(false)} />
    </foreignObject>
  );
};

export default Node;
