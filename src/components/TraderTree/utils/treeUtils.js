import _ from "lodash";

export const getAllPreviousQuests = (questName, trader, priors) => {
  const quests = JSON.parse(localStorage.getItem("tarkov-traderQuests"));
  const currentQuest = quests[trader]["Quests"][questName];
  if (currentQuest?.Prior) {
    currentQuest.Prior.forEach(quest => {
      if (quests[trader]["Quests"][quest]) {
        _.set(priors, quest, true);
        getAllPreviousQuests(quest, trader, priors);
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
  console.log(completedQuests);
  console.log(targetName);
  console.log(completedQuests?.[targetName]);
  return completedQuests?.[targetName] ? "next-completed" : "";
};
