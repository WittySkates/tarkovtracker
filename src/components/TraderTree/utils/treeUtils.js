import _ from "lodash";

export const getAllPreviousQuests = (questName, traderData, priors) => {
  const currentQuest = traderData.attributes.Quests[questName];
  if (currentQuest?.Prior) {
    currentQuest.Prior.forEach(quest => {
      if (traderData.attributes.Quests[quest]) {
        _.set(priors, quest, true);
        getAllPreviousQuests(quest, traderData, priors);
      }
    });
  } else {
    return;
  }
};

export const getLinkClasses = (node, orientation, completedQuests) => {
  const {
    target: {
      data: { name: targetName }
    }
  } = node;
  // console.log(completedQuests);
  // console.log(targetName);
  // console.log(completedQuests?.[targetName]);

  return completedQuests?.[targetName] ? "next-completed" : "";
};
