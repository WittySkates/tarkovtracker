/** @module scraper */
import admin from "firebase-admin";
import { firebaseConfig, firebaseConfigDev, adminConfig, adminConfigDev, dev } from "../config.js";
import { updateTraderData } from "./traderScraper.js";
import { updateAmmoChart } from "./ammoChartScaper.js";

if (dev) {
  admin.initializeApp({
    credential: admin.credential.cert(adminConfigDev),
    databaseURL: firebaseConfigDev.databaseURL
  });
} else {
  admin.initializeApp({
    credential: admin.credential.cert(adminConfig),
    databaseURL: firebaseConfig.databaseURL
  });
}
const database = admin.database();

// Call this for updating trader quest data
await updateTraderData(database);

//Call this for updating ammo chart data
await updateAmmoChart(database);

admin.app().delete();
