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
    traderQuests,
    traderName,
    database,
    uid,
    doneCount
  } = props;
  const [isChecked, setIsChecked] = useState(false);
  const [isSignInDialogOpen, setIsSignInDialogOpen] = useState(false);
  const [isQuestDialogOpen, setIsQuestDialogOpen] = useState(false);
  const questName = _.camelCase(nodeDatum.name);

  const nodeRef = database.ref(`users/${uid}/completedQuests/${traderName}/${questName}`);

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
      getAllPreviousQuests(questName, traderQuests, priors);
      if (!isChecked) {
        database.ref(`users/${uid}/completedQuests/${traderName}`).update(priors);
      }
      database.ref(`users/${uid}/completedQuests/${traderName}`).update({
        [questName]: !isChecked
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
          rx="19.5"
          className={traderName}
        />
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
            stroke-width="0.5"
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
        <path
          d="M366.312 180.375V180.625H366.562H371V183.25H359V180.625H363.438H363.688V180.375V171V170.75H363.438H360.562V168.125H366.312V180.375Z"
          fill="black"
          stroke="black"
          strokeWidth="0.5"
        />
        <path
          d="M363.837 159.103C364.181 158.873 364.586 158.75 365 158.75C365.555 158.75 366.088 158.971 366.481 159.363C366.873 159.756 367.094 160.288 367.094 160.844C367.094 161.258 366.971 161.663 366.741 162.007C366.511 162.351 366.184 162.62 365.801 162.778C365.419 162.937 364.998 162.978 364.592 162.897C364.185 162.816 363.812 162.617 363.519 162.324C363.227 162.031 363.027 161.658 362.946 161.252C362.866 160.846 362.907 160.425 363.066 160.043C363.224 159.66 363.492 159.333 363.837 159.103Z"
          fill="black"
          stroke="black"
          strokeWidth="0.5"
        />
        <path
          className="information-icon"
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
        <foreignObject
          style={{ fill: "none" }}
          width={foreignObjectProps.width - 40}
          height={foreignObjectProps.height - 180}
          x="20"
          y="10"
        >
          <div className="node-title">
            <p>{nodeDatum?.name}</p>
          </div>
        </foreignObject>
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

  // return (
  //   <foreignObject className="node-obj" {...foreignObjectProps}>
  //     <div className={`node-container ${traderName}`}>
  //       <p>{nodeDatum?.name}</p>
  //       {nodeDatum?.name === traderName && (
  //         <>
  //           <QuestCount traderQuests={traderQuests} count={doneCount} />
  //           <CheckAllIcon
  //             className="checkall-icon"
  //             onClick={() => {
  //               checkAllQuests(true);
  //             }}
  //           />
  //           <UnCheckAllIcon className={"uncheckall-icon"} onClick={() => checkAllQuests(false)} />
  //         </>
  //       )}
  //       {nodeDatum?.attributes?.Objectives?.length > 0 && (
  //         <Checkbox className="node-checkbox" isChecked={isChecked} onChange={checkboxOnChange} />
  //       )}
  //       {nodeDatum?.children?.length > 0 && (
  //         <ToggleButton
  //           onClick={toggleNode}
  //           isCollapsed={nodeDatum.__rd3t.collapsed}
  //           className="toggle-button"
  //         />
  //       )}
  //       {nodeDatum?.attributes?.link && (
  //         <PopoutIcon onClick={() => setIsQuestDialogOpen(true)} className="popup-icon" />
  //       )}
  //       <QuestPopup
  //         checkboxOnChange={checkboxOnChange}
  //         isChecked={isChecked}
  //         data={nodeDatum}
  //         isOpen={isQuestDialogOpen}
  //         handleClose={() => setIsQuestDialogOpen(false)}
  //       />
  //       <SignInPopup isOpen={isSignInDialogOpen} handleClose={() => setIsSignInDialogOpen(false)} />
  //     </div>
  //   </foreignObject>
  // );
};

export default Node;
