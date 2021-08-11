import _ from "lodash";

export const getAllPreviousQuests = (questName, trader, priors) => {
  const quests = JSON.parse(localStorage.getItem("tarkov-traderQuests"));
  const currentQuest = quests[trader]["Quests"][questName];
  if (currentQuest?.Prior) {
    currentQuest.Prior.forEach((element) => {
      _.set(priors, element, true);
      getAllPreviousQuests(element, trader, priors);
    });
  } else {
    return;
  }
};
