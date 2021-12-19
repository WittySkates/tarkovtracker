/** @module QuestCount */

import React from "react";
import "./styles/questcount.scss";

const QuestCount = ({ traderData, count }) => {
  const totalCount = Object.keys(traderData.attributes.Quests).length;
  return <div>{`${count}/${totalCount}`}</div>;
};

export default QuestCount;
