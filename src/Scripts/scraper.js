import firebase from "firebase";
import _ from "lodash";
import axios from "axios";
import cheerio from "cheerio";
import config from "../config.js";

firebase.initializeApp(config);
const database = firebase.database();

const getPrior = async (res, trader, title, link) => {
  try {
    const { data } = await axios.get(link);
    const $ = cheerio.load(data);
    let prior = "";
    $(".va-infobox-content").each((_idx, el) => {
      if (
        $(el)
          .text()
          .match(/(Previous:)(.*)/gs)
      ) {
        const prior = [];
        const lisPr = $(el).children();
        $(lisPr).each((_idx, el) => {
          if ($(el).is("a")) {
            prior.push($(el).text());
          }
        });
        _.set(res, `${trader}.Quests.${title}.Prior`, prior);
      }
    });
    return prior;
  } catch (error) {
    throw error;
  }
};

const getUrls = async () => {
  try {
    const { data } = await axios.get(
      "https://escapefromtarkov.fandom.com/wiki/Quests"
    );
    const $ = cheerio.load(data);
    const res = {};
    let promises = [];
    $(".dealer-toggle").each((_idx, el) => {
      let image = $(el).children().attr("src");
      image = image.replace(/(.*.png\/)(.*)/, (match, link) => {
        console.log(match, link);
        return link;
      });
      const title = $(el).attr("title");
      _.set(res, title, { image });
    });

    Object.keys(res).forEach(trader => {
      const path = `.${trader}-content > tbody > tr`;
      let title = "";
      $(path).each((_idx, el) => {
        if (_idx === 0 || _idx === 1) {
          return;
        }
        const tds = $(el).children();
        $(tds).each((_idx, el) => {
          const text = $(el).text().replace(/\n+/g, "");
          switch (_idx) {
            case 0:
              title = text;
              const link =
                "https://escapefromtarkov.fandom.com/" +
                $(el).children().attr("href");
              _.set(res, `${trader}.Quests.${title}`, {});
              _.set(res, `${trader}.Quests.${title}.Link`, link);

              const prior = getPrior(res, trader, title, link);
              promises.push(prior);

              break;
            case 1:
              _.set(res, `${trader}.Quests.${title}.Type`, text);
              break;
            case 2:
              const objectives = [];
              const lisOb = $(el).children().children();
              $(lisOb).each((_idx, el) => {
                objectives.push($(el).text().replace(/\n+/g, ""));
              });
              _.set(res, `${trader}.Quests.${title}.Objectives`, objectives);
              break;
            case 3:
              const rewards = [];
              const lisRe = $(el).children().children();
              $(lisRe).each((_idx, el) => {
                rewards.push($(el).text().replace(/\n+/g, ""));
              });
              _.set(res, `${trader}.Quests.${title}.Rewards`, rewards);
              _.set(res, `${trader}.Quests.${title}.isCompleted`, false);
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

const push = async () => {
  let data = await getUrls();
  var timeout = 8000;
  database.ref().child("traderTree").set(data);
  setTimeout(() => {
    firebase.app().delete();
  }, timeout);
};
push();
