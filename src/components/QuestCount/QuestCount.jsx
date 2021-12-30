/** @module QuestCount */

import React from "react";
import "./styles/questcount.scss";

const QuestCount = ({ traderQuests, count }) => {
  const totalCount = Object.keys(traderQuests).length;

  return <div>{`${count}/${totalCount}`}</div>;
};

export default QuestCount;
