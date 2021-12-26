/** @module Common Utils */

export const getAllTruthyValues = quests => {
  return Object.fromEntries(Object.entries(quests).filter(val => Boolean(val[1])));
};
