import _ from "lodash";

export const getAllPreviousQuests = questName => {
  const quests = localStorage.getItem("tarkov-traderQuests");
  const currentQuest = quests[questName];
};
