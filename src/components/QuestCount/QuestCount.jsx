/** @module QuestCount */

import React from "react";
import "./styles/questcount.scss";

const QuestCount = ({ trader, count }) => {
  const quests = JSON.parse(localStorage.getItem("tarkov-traderQuests"));
  const totalCount = Object.keys(quests[trader]["Quests"]).length;
  return <div>{`${count}/${totalCount}`}</div>;
};

export default QuestCount;
