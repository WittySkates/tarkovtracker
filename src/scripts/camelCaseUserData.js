/** @module camelCaseUserData */
import admin from "firebase-admin";
import _ from "lodash";
import { firebaseConfig, firebaseConfigDev, adminConfig, adminConfigDev, dev } from "../config.js";

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

let promises = [];
const camelCaseUserData = async () => {
  const database = admin.database();

  const userSnapshot = await database
    .ref("users")
    .get()
    .then(snapshot => {
      if (snapshot.exists()) {
        return snapshot.val();
      }
      return null;
    });

  Object.entries(userSnapshot).forEach(([userName, userData]) => {
    if (!userData.completedQuests) {
      console.log(`No user data for ${userName}`);
      return;
    }
    Object.entries(userData.completedQuests).forEach(([traderName, traderData]) => {
      Object.entries(traderData).forEach(async ([questName, questData]) => {
        if (questName !== _.camelCase(questName)) {
          userSnapshot[userName].completedQuests[traderName][_.camelCase(questName)] = questData;
          delete userSnapshot[userName].completedQuests[traderName][questName];
        }
      });
    });
  });
  const dataPsuh = database.ref(`users`).set(userSnapshot);
  promises.push(dataPsuh);
};

await camelCaseUserData();
await Promise.all(promises);
admin.app().delete();
