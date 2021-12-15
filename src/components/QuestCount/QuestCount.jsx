/** @module QuestCount */

import React from "react";
import "./styles/questcount.scss";

const QuestCount = ({ traderIndex, count }) => {
	const tree = JSON.parse(localStorage.getItem("tarkov-tree"));
	const totalCount = Object.keys(tree[traderIndex].attributes.Quests).length;
	return <div>{`${count}/${totalCount}`}</div>;
};

export default QuestCount;
