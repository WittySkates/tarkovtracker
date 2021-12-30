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
        <rect
          width={`${foreignObjectProps.width - 20}`}
          height="200"
          x="10"
          y="5"
          rx="19.5"
          className={traderName}
        />

        {/* Name of node */}
        <foreignObject
          style={{ fill: "none" }}
          width={foreignObjectProps.width - 50}
          height={foreignObjectProps.height - 150}
          x="25"
          y="15"
        >
          <div className="node-title">
            <p>{nodeDatum?.name}</p>
          </div>
        </foreignObject>

        {/* Trader vs quest nodes*/}
        {nodeDatum?.name === traderName ? (
          //  Trader node rendering
          <>
            {/* Done count */}
            <foreignObject
              style={{ fill: "none" }}
              width={foreignObjectProps.width - 40}
              height={foreignObjectProps.height - 180}
              x="20"
              y="70"
            >
              <div className="node-title">{`${doneCount}/${Object.keys(traderQuests).length}`}</div>
            </foreignObject>
            {/* Check all icon path and hitbox */}
            <path
              d="M46.3939 175.56L46.7811 175.948L47.1316 175.527L55.8851 165.018L58.3636 167.084L46.9968 180.719L39.7701 173.493L42.0481 171.215L46.3939 175.56Z"
              fill="black"
              stroke="black"
              strokeWidth="0"
            />
            <path
              d="M33.7222 186.778V187.278H34.2222H63.782H64.2821L64.282 186.778L64.2778 157.222L64.2777 156.722H63.7778H34.2222H33.7222V157.222V186.778ZM34.2222 153.5H63.7778C65.8302 153.5 67.5 155.17 67.5 157.222V186.778C67.5 188.83 65.8302 190.5 63.7778 190.5H34.2222C32.1698 190.5 30.5 188.83 30.5 186.778V157.222C30.5 155.17 32.1698 153.5 34.2222 153.5Z"
              fill="black"
              stroke="black"
              strokeWidth="0"
            />
            <rect
              className="checkbox-icon"
              height="44px"
              width="44px"
              x="27"
              y="150"
              fill="transparent"
              stroke="transparent"
              onClick={() => checkAllQuests(true)}
            />
            {/* Uncheck all icon path and hitbox */}
            <path
              d="M372.461 177.205C372.759 177.505 372.926 177.911 372.926 178.333C372.926 178.756 372.759 179.161 372.461 179.461C372.159 179.754 371.754 179.918 371.333 179.918C370.912 179.918 370.508 179.754 370.205 179.461L365 174.236L359.795 179.461C359.492 179.754 359.088 179.918 358.667 179.918C358.246 179.918 357.841 179.754 357.539 179.461C357.241 179.161 357.074 178.756 357.074 178.333C357.074 177.911 357.241 177.505 357.539 177.205L362.764 172L357.539 166.795C357.286 166.487 357.157 166.097 357.177 165.699C357.196 165.302 357.363 164.926 357.644 164.644C357.926 164.363 358.302 164.196 358.699 164.177C359.097 164.157 359.487 164.286 359.795 164.539L365 169.764L370.205 164.539C370.513 164.286 370.903 164.157 371.301 164.177C371.698 164.196 372.074 164.363 372.356 164.644C372.637 164.926 372.804 165.302 372.823 165.699C372.843 166.097 372.714 166.487 372.461 166.795L367.236 172L372.461 177.205ZM384 156.167V187.833C384 188.673 383.666 189.479 383.073 190.073C382.479 190.666 381.673 191 380.833 191H349.167C348.327 191 347.521 190.666 346.927 190.073C346.334 189.479 346 188.673 346 187.833V156.167C346 155.327 346.334 154.521 346.927 153.927C347.521 153.334 348.327 153 349.167 153H380.833C381.673 153 382.479 153.334 383.073 153.927C383.666 154.521 384 155.327 384 156.167ZM380.833 187.833V156.167H349.167V187.833H380.833Z"
              fill="black"
              strokeWidth="0"
            />
            <rect
              className="information-icon"
              height="40px"
              width="40px"
              x="345"
              y="150"
              fill="transparent"
              stroke="transparent"
              onClick={() => checkAllQuests(false)}
            />
          </>
        ) : (
          // Quest node rendering
          <>
            {/* Checkbox icon paths and hitbox */}
            {isChecked ? (
              <path
                d="M64.625 152.25H33.375C32.5462 152.25 31.7513 152.579 31.1653 153.165C30.5792 153.751 30.25 154.546 30.25 155.375V186.625C30.25 187.454 30.5792 188.249 31.1653 188.835C31.7513 189.421 32.5462 189.75 33.375 189.75H64.625C65.4538 189.75 66.2487 189.421 66.8347 188.835C67.4208 188.249 67.75 187.454 67.75 186.625V155.375C67.75 154.546 67.4208 153.751 66.8347 153.165C66.2487 152.579 65.4538 152.25 64.625 152.25ZM45.875 179.594L38.0625 171.848L40.5469 169.438L45.875 174.666L57.4516 163.188L59.9375 165.652L45.875 179.594Z"
                fill="black"
                strokeWidth="0"
              />
            ) : (
              <path
                d="M33.125 186.625V186.875H33.375H64.625H64.875V186.625V155.375V155.125H64.625H33.375H33.125V155.375V186.625ZM33.375 152.5H64.625C65.3875 152.5 66.1188 152.803 66.6579 153.342C67.1971 153.881 67.5 154.613 67.5 155.375V186.625C67.5 187.387 67.1971 188.119 66.6579 188.658C66.1188 189.197 65.3875 189.5 64.625 189.5H33.375C32.6125 189.5 31.8812 189.197 31.3421 188.658C30.8029 188.119 30.5 187.387 30.5 186.625V155.375C30.5 154.613 30.8029 153.881 31.3421 153.342C31.8812 152.803 32.6125 152.5 33.375 152.5Z"
                fill="black"
                stroke="black"
                strokeWidth="0.5"
              />
            )}
            <rect
              className="checkbox-icon"
              height="44px"
              width="44px"
              x="27"
              y="150"
              fill="transparent"
              stroke="transparent"
              onClick={checkboxOnChange}
            />
            {/* Info icon paths and hitbox */}
            <path
              className={nodeDatum?.attributes?.noPriorNext ? "info-path-red" : ""}
              d="M366.312 180.375V180.625H366.562H371V183.25H359V180.625H363.438H363.688V180.375V171V170.75H363.438H360.562V168.125H366.312V180.375Z"
              fill="black"
              stroke="black"
              strokeWidth="0.5"
            />
            <path
              className={nodeDatum?.attributes?.noPriorNext ? "info-path-red" : ""}
              d="M363.837 159.103C364.181 158.873 364.586 158.75 365 158.75C365.555 158.75 366.088 158.971 366.481 159.363C366.873 159.756 367.094 160.288 367.094 160.844C367.094 161.258 366.971 161.663 366.741 162.007C366.511 162.351 366.184 162.62 365.801 162.778C365.419 162.937 364.998 162.978 364.592 162.897C364.185 162.816 363.812 162.617 363.519 162.324C363.227 162.031 363.027 161.658 362.946 161.252C362.866 160.846 362.907 160.425 363.066 160.043C363.224 159.66 363.492 159.333 363.837 159.103Z"
              fill="black"
              stroke="black"
              strokeWidth="0.5"
            />
            <path
              className={nodeDatum?.attributes?.noPriorNext ? "info-path-red" : ""}
              d="M365 192.625C360.723 192.625 356.542 191.357 352.986 188.981C349.43 186.604 346.658 183.227 345.021 179.276C343.384 175.324 342.956 170.976 343.791 166.781C344.625 162.586 346.685 158.733 349.709 155.709C352.733 152.685 356.586 150.625 360.781 149.791C364.976 148.956 369.324 149.384 373.276 151.021C377.227 152.658 380.604 155.43 382.981 158.986C385.357 162.542 386.625 166.723 386.625 171C386.625 176.735 384.347 182.236 380.291 186.291C376.236 190.347 370.735 192.625 365 192.625ZM365 152C361.242 152 357.569 153.114 354.444 155.202C351.32 157.29 348.884 160.257 347.446 163.729C346.008 167.201 345.632 171.021 346.365 174.707C347.098 178.392 348.908 181.778 351.565 184.435C354.222 187.092 357.608 188.902 361.293 189.635C364.979 190.368 368.799 189.992 372.271 188.554C375.743 187.116 378.71 184.68 380.798 181.556C382.886 178.431 384 174.758 384 171C384 165.961 381.998 161.128 378.435 157.565C374.872 154.002 370.039 152 365 152Z"
              fill="black"
              stroke="black"
              strokeWidth="0.5"
            />
            <rect
              className="information-icon"
              height="40px"
              width="40px"
              x="345"
              y="150"
              fill="transparent"
              stroke="transparent"
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
