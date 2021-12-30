/** @module Common Utils */

export const getAllTruthyValues = quests => {
  return Object.fromEntries(Object.entries(quests).filter(val => Boolean(val[1])));
};

export const getDoneCount = (completedQuestsTrader, traderQuests) => {
  const user = Object.keys(completedQuestsTrader);
  const trader = Object.keys(traderQuests);
  return user.filter(x => trader.includes(x)).length;
};
