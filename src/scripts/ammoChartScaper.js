/** @module scraper */
import _ from "lodash";
import axios from "axios";
import cheerio from "cheerio";

const getAmmoChart = async () => {
  try {
    const { data } = await axios.get("https://escapefromtarkov.fandom.com/wiki/Ballistics");
    const $ = cheerio.load(data);
    const res = {};
    let header = $("#trkballtable").next("thead");
    let tableBody = $("#trkballtable").next("tbody");
    console.log(header);
    return res;
  } catch (error) {
    throw error;
  }
};

export const updateAmmoChart = async database => {
  let ammoChartDatabase = {};
  await database
    .ref("ammoChart")
    .get()
    .then(snapshot => {
      if (snapshot.exists()) {
        ammoChartDatabase = snapshot.val();
      } else {
        return null;
      }
    })
    .catch(error => {
      console.log("Erroring getting ammo chart" + error);
    });

  if (ammoChartDatabase?.lastUpdated) {
    delete ammoChartDatabase.lastUpdated;
  }

  const ammoChart = await getAmmoChart();
  if (_.isEqual(ammoChart, ammoChartDatabase)) {
    console.log("Ammo chart was the same, did not update");
    return;
  }

  _.set(ammoChart, "lastUpdated", Date.now());
  await database.ref("ammoChart").set(ammoChart);
};

await getAmmoChart();
