/** @module scraper */
import admin from "firebase-admin";
import _ from "lodash";
import axios from "axios";
import cheerio from "cheerio";
import { firebaseConfig, firebaseConfigDev, adminConfig, adminConfigDev } from "../config.js";

admin.initializeApp({
  credential: admin.credential.cert(adminConfig),
  databaseURL: firebaseConfig.databaseURL
});
const database = admin.database();

const getPriorNext = async (res, trader, title, link) => {
  try {
    const { data } = await axios.get(link);
    const $ = cheerio.load(data);
    const prior = [];
    const next = [];
    $(".va-infobox-content").each((_idx, el) => {
      if (
        $(el)
          .text()
          .match(/(Previous:)(.*)/gs)
      ) {
        const lisPr = $(el).children();
        $(lisPr).each((_idx, el) => {
          if ($(el).is("a")) {
            prior.push($(el).text());
          }
        });
        if (prior.length > 0) {
          _.set(res, `${trader}.Quests.${title}.Prior`, prior);
        }
      }
      if (
        $(el)
          .text()
          .match(/(Leads to:)(.*)/gs)
      ) {
        const li = $(el).children();
        $(li).each((_idx, el) => {
          if ($(el).is("a")) {
            next.push($(el).text());
          }
        });
        if (next.length > 0) {
          _.set(res, `${trader}.Quests.${title}.Next`, next);
        }
      }
    });
    return;
  } catch (error) {
    throw error;
  }
};

const getUrls = async () => {
  try {
    const { data } = await axios.get("https://escapefromtarkov.fandom.com/wiki/Quests");
    const $ = cheerio.load(data);
    const res = {};
    let promises = [];
    $(".dealer-toggle").each((_idx, el) => {
      let image = $(el).children().attr("data-src");
      image = image.replace(/(.*.png)(.*)/, (match, link) => {
        return link;
      });
      const title = $(el).attr("title");
      _.set(res, title, { image });
    });

    Object.keys(res).forEach(trader => {
      const path = `.${trader}-content > tbody > tr`;
      let title = "";
      $(path).each((_idx, tr) => {
        if (_idx === 0 || _idx === 1) {
          return;
        }
        const tds = $(tr).children();
        $(tds).each((_idx, td) => {
          const text = $(td).text().replace(/\n+/g, "");
          switch (_idx) {
            case 0:
              title = text;
              const link = "https://escapefromtarkov.fandom.com" + $(td).find("a").attr("href");
              _.set(res, `${trader}.Quests.${title}`, {});
              _.set(res, `${trader}.Quests.${title}.Name`, title);
              _.set(res, `${trader}.Quests.${title}.Link`, link);

              const prom = getPriorNext(res, trader, title, link);
              promises.push(prom);

              break;
            case 1:
              _.set(res, `${trader}.Quests.${title}.Type`, text);
              break;
            case 2:
              const objectives = [];
              const lisOb = $(td).children().children();
              $(lisOb).each((_idx, obj) => {
                objectives.push($(obj).text().replace(/\n+/g, ""));
              });
              _.set(res, `${trader}.Quests.${title}.Objectives`, objectives);
              break;
            case 3:
              const rewards = [];
              const lisRe = $(td).children().children();
              $(lisRe).each((_idx, rew) => {
                rewards.push($(rew).text().replace(/\n+/g, ""));
              });
              _.set(res, `${trader}.Quests.${title}.Rewards`, rewards);
              // _.set(res, `${trader}.Quests.${title}.isCompleted`, false);
              break;
            default:
              break;
          }
        });
      });
    });
    await Promise.all(promises);
    return res;
  } catch (error) {
    throw error;
  }
};

const findRoots = quests => {
  const roots = [];
  for (const [name, quest] of Object.entries(quests)) {
    if (quest.Prior === undefined || quest.Prior.length === 0) {
      roots.push(name);
    } else {
      let hasPrior = false;

      quest.Prior.forEach(prior => {
        if (typeof quests[prior] != "undefined") {
          hasPrior = true;
        }
      });
      if (!hasPrior) {
        roots.push(name);
      }
    }
  }
  return roots;
};

// () -> () -> () -> () -> ***
const getTree = (tree, roots, quests) => {
  _.forEach(roots, questName => {
    if (!quests[questName]) {
      return;
    }
    const entry = {
      name: questName,
      attributes: {
        Objectives: quests[questName].Objectives,
        Rewards: quests[questName].Rewards,
        type: quests[questName].Type,
        link: quests[questName].Link
      },
      children: []
    };
    getTree(entry.children, quests[questName].Next, quests);
    tree.push(entry);
  });
};

const generateTraderTree = traderQuests => {
  const allTraderTrees = [];
  const traders = Object.keys(traderQuests);
  traders.forEach(trader => {
    const roots = findRoots(traderQuests[trader].Quests);
    const tree = [];
    getTree(tree, roots, traderQuests[trader].Quests);

    const quests = _.cloneDeep(traderQuests[trader].Quests);
    for (const quest in quests) {
      delete quests[quest].Objectives;
      delete quests[quest].Rewards;
      delete quests[quest].Type;
      delete quests[quest].Link;
      delete quests[quest].Name;
    }

    allTraderTrees.push({
      name: trader,
      attributes: {
        Quests: quests,
        image: traderQuests[trader].image
      },
      children: tree
    });
    // _.set(allTraderTrees, trader, tree);
  });
  return allTraderTrees;
};

const updateTraderData = async () => {
  let traderQuestsDatabase = {};
  await database
    .ref("traderQuests")
    .get()
    .then(snapshot => {
      if (snapshot.exists()) {
        traderQuestsDatabase = snapshot.val();
      } else {
        return null;
      }
    })
    .catch(error => {
      console.log("Erroring getting trader quests" + error);
    });

  if (traderQuestsDatabase?.lastUpdated) {
    delete traderQuestsDatabase.lastUpdated;
  }

  const traderQuests = await getUrls();
  if (_.isEqual(traderQuests, traderQuestsDatabase)) {
    return;
  }

  const traderTree = generateTraderTree(traderQuests);
  const traderTreeString = JSON.stringify(traderTree);
  _.set(traderQuests, "lastUpdated", Date.now());

  await database.ref("traderQuests").set(traderQuests);
  await database.ref("traderTree").set(traderTreeString);
};

const updateUserCount = async () => {
  let userCount;
  await database
    .ref("users")
    .get()
    .then(snapshot => {
      if (snapshot.exists()) {
        userCount = Object.keys(snapshot.val()).length;
      } else {
        return null;
      }
    })
    .catch(error => {
      console.log("Erroring getting trader quests" + error);
    });
  await database.ref("userCount").set(userCount);
};

await updateTraderData();
await updateUserCount();
admin.app().delete();
