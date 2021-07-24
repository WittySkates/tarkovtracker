import React, { useState, useEffect } from "react";
import _ from "lodash";
import firebase from "firebase/app";
import "firebase/database";
import { TopNav, TraderTree, TraderButton, Traderbar } from "./components";

import "./App.scss";
// import 'bootstrap/dist/css/bootstrap.min.css';
const database = firebase.database();

const App = () => {
  const [data, setData] = useState("");
  const [traderNames, setTraderNames] = useState([]);
  const trader = {
    traderName: "Prapor",
    imageLink:
      "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/6/6b/Prapor_Portrait.png",
  };
  useEffect(() => {
    (async () => {
      const traderTree = await database
        .ref("traderTree")
        .get()
        .then(snapshot => {
          if (snapshot.exists()) {
            return snapshot.val();
          } else {
            return null;
          }
        })
        .catch(error => {
          console.log("Erroring getting trader tree" + error);
        });
      setData(JSON.parse(traderTree));
      setTraderNames(_.reduce(data, (acc, entry) => [...acc, entry.name], []));
    })();
  }, []);

  return (
    <>
      <TopNav />
      <Traderbar traderNames={traderNames} />
      <TraderButton {...trader} />
      <TraderTree data={data} />
    </>
  );
};

export default App;
