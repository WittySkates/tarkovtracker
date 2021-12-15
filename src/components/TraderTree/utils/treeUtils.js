import _ from "lodash";

export const getAllPreviousQuests = (questName, traderIndex, priors) => {
	const tree = JSON.parse(localStorage.getItem("tarkov-tree"));
	const currentQuest = tree[traderIndex].attributes.Quests[questName];
	if (currentQuest?.Prior) {
		currentQuest.Prior.forEach((quest) => {
			if (tree[traderIndex].attributes.Quests[quest]) {
				_.set(priors, quest, true);
				getAllPreviousQuests(quest, traderIndex, priors);
			}
		});
	} else {
		return;
	}
};

export const getLinkClasses = (node, orientation, completedQuests) => {
	const {
		target: {
			data: { name: targetName },
		},
	} = node;
	// console.log(completedQuests);
	// console.log(targetName);
	// console.log(completedQuests?.[targetName]);

	return completedQuests?.[targetName] ? "next-completed" : "";
};
