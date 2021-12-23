import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import _ from "lodash";
import firebase from "firebase/app";
import "firebase/database";
import { TopNav, TraderTree, Traderbar, Attributions } from "./components";
import "./App.scss";

const database = firebase.database();

const App = () => {
  const [traderTrees, setTraderTrees] = useState({});
  const [traderNames, setTraderNames] = useState([]);
  const [currentTrader, setCurrentTrader] = useState(0);

  useEffect(() => {
    (async () => {
      let lastUpdated;
      await database
        .ref("traderQuests/lastUpdated")
        .get()
        .then(snapshot => {
          if (snapshot.exists()) {
            lastUpdated = snapshot.val();
          } else {
            return null;
          }
        })
        .catch(error => {
          console.log("Erroring getting lastUpdated" + error);
        });
      if (
        !localStorage.getItem("tarkov-time") ||
        localStorage.getItem("tarkov-time") !== lastUpdated.toString()
      ) {
        localStorage.setItem("tarkov-time", lastUpdated);
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
      }

      const traderTrees = JSON.parse(localStorage.getItem("tarkov-tree"));
      setTraderTrees(traderTrees);

      const traderNames = _.reduce(
        traderTrees,
        (acc, entry) => [...acc, { name: entry.name, attributes: entry.attributes }],
        []
      );
      setTraderNames(traderNames);
    })();
  }, []);

  return (
    <>
      <Router>
        <TopNav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Traderbar
                  traderNames={traderNames}
                  traderTrees={traderTrees}
                  currentTrader={currentTrader}
                  setCurrentTrader={setCurrentTrader}
                />
                <TraderTree
                  traderData={traderTrees[currentTrader]}
                  trader={traderNames[currentTrader]?.name}
                />
              </>
            }
          ></Route>
          {/* <Route path="/quest_items"></Route>
          <Route path="/ammo_chart"></Route> */}
          <Route path="attributions" element={<Attributions />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
