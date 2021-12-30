import _ from "lodash";

export const getAllPreviousQuests = (questName, traderQuests, priors) => {
  const currentQuest = traderQuests[questName];
  if (currentQuest?.Prior) {
    currentQuest.Prior.forEach(quest => {
      if (traderQuests[quest]) {
        _.set(priors, quest, true);
        getAllPreviousQuests(quest, traderQuests, priors);
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
  const questName = _.camelCase(targetName);
  // if (targetName === "Polikhim hobo") {
  //   console.log(completedQuests);
  //   console.log(targetName);
  //   console.log(completedQuests?.[targetName]);
  //   console.log(completedQuests?.[targetName] ? "next-completed" : "");
  // }

  return completedQuests?.[questName] ? "next-completed" : "";
};
