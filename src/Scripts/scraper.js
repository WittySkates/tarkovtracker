const _ = require("lodash");
const axios = require("axios");
const cheerio = require("cheerio");

const getUrls = async () => {
  try {
    const { data } = await axios.get(
      "https://escapefromtarkov.fandom.com/wiki/Quests"
    );
    const $ = cheerio.load(data);
    const res = {};

    $(".dealer-toggle").each((_idx, el) => {
      const title = $(el).attr("title");
      _.set(res, title, {});
    });

    Object.keys(res).forEach((trader) => {
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
              _.set(res, `${trader}.Quests.${title}`, {});
              const link =
                "https://escapefromtarkov.fandom.com/" +
                $(el).children().attr("href");

              // axios.get(link).then((response) => {
              //   const $ = cheerio.load(response);

              //   $(".va-infobox-content").each((_idx, el) => {
              //     if (
              //       $(el)
              //         .text()
              //         .match(/(Previous:)(.*)/gs)
              //     ) {
              //       const prior = $(el).text().replace("Previous:", "");
              //       _.set(res, `${trader}.Quests.${title}.Prior`, prior);
              //     }
              //   });
              // });

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
    return res;
  } catch (error) {
    throw error;
  }
};

const get = async () => {
  let feed = await getUrls();
  console.log(feed.Prapor.Quests["The Bosses gathering"]);
};
get();

const getPrior = async (res, trader, title, link) => {
  try {
    const { data } = await axios.get(link);
    const $ = cheerio.load(data);

    $(".va-infobox-content").each((_idx, el) => {
      if (
        $(el)
          .text()
          .match(/(Previous:)(.*)/gs)
      ) {
        const prior = $(el).text().replace("Previous:", "");
        _.set(res, `${trader}.Quests.${title}.Prior`, prior);
      }
    });
  } catch (error) {
    throw error;
  }
};

// async function getPrior(res, trader, title, link) {
//   try {
//     const { data } = await axios.get(link);
//     const $ = cheerio.load(data);

//     $(".va-infobox-content").each((_idx, el) => {
//       if (
//         $(el)
//           .text()
//           .match(/(Previous:)(.*)/gs)
//       ) {
//         const prior = $(el).text().replace("Previous:", "");
//         _.set(res, `${trader}.Quests.${title}.Prior`, prior);
//       }
//     });
//   } catch (error) {
//     throw error;
//   }
// }

// const getData = async () => {
// 	try {
// 		const { data } = await axios.get(
// 			'https://escapefromtarkov.fandom.com/wiki/Gunsmith_-_Part_2'
// 		);
// 		const $ = cheerio.load(data);
// 		const res = {title:[], requirements:[], objectives:[], prior:[]};

//         $('#firstHeading').each((_idx, el) => {
// 			const title = $(el).text()
// 			res.title.push(title)
// 		});

// 		$('#Requirements').parent().next().each((_idx, el) => {
// 			const requirement = $(el).text()
// 			res.requirements.push(requirement)
// 		});

// 		$('#Objectives').parent().next().each((_idx, el) => {
// 			const objective = $(el).text()
// 			res.objectives.push(objective)
// 		});

// 		return res;
// 	}
//     catch (error) {
// 		throw error;
// 	}
// };
// getData().then((data) => console.log(data));
