import React, { useState, useEffect } from "react";
import _ from "lodash";
import firebase from "firebase/app";
import "firebase/database";
import { TopNav, TraderTree, Traderbar } from "./components";

import "./App.scss";
// import 'bootstrap/dist/css/bootstrap.min.css';
const database = firebase.database();

const App = () => {
  const [traderTrees, setTraderTrees] = useState("");
  const [traderNames, setTraderNames] = useState([]);
  const [traderQuests, setTraderQuests] = useState({});
  const [currentTrader, setCurrentTrader] = useState(0);

  useEffect(() => {
    (async () => {
      await database
        .ref("traderTree")
        .get()
        .then(snapshot => {
          if (snapshot.exists()) {
            const tree = JSON.parse(snapshot.val());
            setTraderTrees(tree);
            setTraderNames(
              _.reduce(tree, (acc, entry) => [...acc, entry.name], [])
            );
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
            setTraderQuests(snapshot.val());
          } else {
            return null;
          }
        })
        .catch(error => {
          console.log("Erroring getting trader quests" + error);
        });
    })();
  }, []);

  return (
    <>
      <TopNav />
      <Traderbar
        traderNames={traderNames}
        traderQuests={traderQuests}
        currentTrader={currentTrader}
        setCurrentTrader={setCurrentTrader}
      />
      <TraderTree data={traderTrees[currentTrader]} />
    </>
  );
};

export default App;
