import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TopNav, TraderTree, Traderbar, Attributions } from "./components";
import { basicRealtimeApiCall, auth, database } from "./utils/firebase";
import { getAllTruthyValues } from "./utils/common";
import { useDispatch } from "react-redux";
import { setCompletedQuests } from "./redux/slices/completedQuestsSlice";
import _ from "lodash";

import "./App.scss";

const App = () => {
  const [uid, setUid] = useState("");
  const [traderTrees, setTraderTrees] = useState({});
  const [traderInfo, setTraderInfo] = useState([]);
  const [currentTrader, setCurrentTrader] = useState(0);
  const dispatch = useDispatch();

  auth.onAuthStateChanged(user => {
    if (user?.uid !== uid) {
      setUid(user?.uid);
    }
  });

  useEffect(() => {
    localStorage.removeItem("tarkov-time");
    localStorage.removeItem("tarkov-tree");
    (async () => {
      let lastUpdated = (await basicRealtimeApiCall("traderQuests/lastUpdated")).data;
      let trees = localStorage.getItem("traderTrees");
      if (
        !localStorage.getItem("tarkovTime") ||
        !localStorage.getItem("traderTrees") ||
        localStorage.getItem("tarkovTime") !== lastUpdated.toString()
      ) {
        localStorage.setItem("tarkovTime", lastUpdated);
        trees = (await basicRealtimeApiCall("traderTrees")).data;
        localStorage.setItem("traderTrees", trees);
      }
      const traderTrees = JSON.parse(trees);
      setTraderTrees(traderTrees);
      const traderInfo = _.reduce(
        traderTrees,
        (acc, entry) => [
          ...acc,
          { name: entry.name, image: entry.attributes.image, quests: entry.attributes.Quests }
        ],
        []
      );
      setTraderInfo(traderInfo);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (uid) {
        const snapshotCallback = snapshot => {
          const trader = snapshot.key;
          const quests = snapshot.val();
          const completedQuestsRes = getAllTruthyValues(quests);
          dispatch(setCompletedQuests({ trader, completedQuestsRes }));
        };
        database.ref(`users/${uid}/completedQuests`).on("child_changed", snapshotCallback);
        database.ref(`users/${uid}/completedQuests`).on("child_added", snapshotCallback);
      }
    })();
  }, [uid]);

  return (
    <Router>
      <TopNav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Traderbar
                traderInfo={traderInfo}
                currentTrader={currentTrader}
                setCurrentTrader={setCurrentTrader}
              />
              {traderInfo?.[currentTrader]?.name ? (
                <TraderTree
                  traderData={traderTrees[currentTrader]}
                  trader={traderInfo[currentTrader].name}
                  uid={uid}
                />
              ) : (
                <p>...Loading</p>
              )}
            </>
          }
        />
        {/* <Route path="/quest_items"/>
          <Route path="/ammo_chart"/> 
          <Route path="/maps"/>*/}
        <Route path="attributions" element={<Attributions />} />
      </Routes>
    </Router>
  );
};

export default App;
