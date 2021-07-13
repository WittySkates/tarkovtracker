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
        const children = $(el).children();
        $(children).each((_idx, el) => {
          const text = $(el).text().replace(/\n+/g, "");
          switch (_idx) {
            case 0:
              title = text;
              _.set(res, `${trader}.Quests.${title}`, {});
              break;
            case 1:
              _.set(res, `${trader}.Quests.${title}.type`, text);
              break;
            case 2:
              const objectives = [];
              $(el).each((_idx, el) => {
                objectives.push($(el).text().replace(/\n+/g, ""));
              });
              _.set(res, `${trader}.Quests.${title}.Objective`, objectives);
              break;
            case 3:
              const rewards = [];
              $(el).each((_idx, el) => {
                rewards.push($(el).text().replace(/\n+/g, ""));
              });
              _.set(res, `${trader}.Quests.${title}.Rewards`, rewards);
              break;
            default:
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
  console.log(feed);
};
get();

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
