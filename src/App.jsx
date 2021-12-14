import React, { useState, useEffect } from "react";
import _ from "lodash";
import firebase from "firebase/app";
import "firebase/database";
import { TopNav, TraderTree, Traderbar } from "./components";
import "./App.scss";

const database = firebase.database();

const App = () => {
  const dayInMS = 86400000;
  const [traderTrees, setTraderTrees] = useState("");
  const [traderNames, setTraderNames] = useState([]);
  const [traderQuests, setTraderQuests] = useState({});
  const [currentTrader, setCurrentTrader] = useState(0);

  useEffect(() => {
    (async () => {
      if (
        !localStorage.getItem("tarkov-tree") ||
        !localStorage.getItem("tarkov-traderQuests") ||
        Date.now() - Number(localStorage.getItem("tarkov-time")) > 3 * dayInMS
      ) {
        localStorage.setItem("tarkov-time", Date.now().toString(10));
        await database
          .ref("traderTree")
          .get()
          .then(snapshot => {
            if (snapshot.exists()) {
              localStorage.setItem("tarkov-tree", snapshot.val());
            } else {
              return null;
            }
          })
          .catch(error => {
            console.log("Erroring getting trader tree" + error);
          });
        await database
          .ref("traderQuests")
          .get()
          .then(snapshot => {
            if (snapshot.exists()) {
              localStorage.setItem("tarkov-traderQuests", JSON.stringify(snapshot.val()));
            } else {
              return null;
            }
          })
          .catch(error => {
            console.log("Erroring getting trader quests" + error);
          });
      }
      const traderQuests = JSON.parse(localStorage.getItem("tarkov-traderQuests"));
      const trees = JSON.parse(localStorage.getItem("tarkov-tree"));
      setTraderTrees(trees);
      setTraderNames(
        _.reduce(
          trees,
          (acc, entry) => [...acc, { name: entry.name, attributes: entry.attributes }],
          []
        )
      );
      setTraderQuests(traderQuests);
    })();
  }, []);
  return (
    <>
      <TopNav />
      <Traderbar
        traderNames={traderNames}
        traderQuests={traderQuests}
        traderTrees={traderTrees}
        currentTrader={currentTrader}
        setCurrentTrader={setCurrentTrader}
      />
      <TraderTree
        traderData={traderTrees[currentTrader]}
        trader={traderNames[currentTrader]?.name}
      />
    </>
  );
};

export default App;
