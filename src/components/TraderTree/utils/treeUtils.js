import _ from "lodash";

export const getAllPreviousQuests = (questName, trader, priors) => {
  const quests = JSON.parse(localStorage.getItem("tarkov-traderQuests"));
  const currentQuest = quests[trader]["Quests"][questName];
  if (currentQuest?.Prior) {
    currentQuest.Prior.forEach((quest) => {
      if (quests[trader]["Quests"][quest]) {
        _.set(priors, quest, true);
        getAllPreviousQuests(quest, trader, priors);
      }
    });
  } else {
    return;
  }
};
