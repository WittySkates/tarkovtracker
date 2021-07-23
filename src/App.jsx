import React, { useState, useEffect } from "react";
import _ from "lodash";
import firebase from "firebase/app";
import "firebase/database";
import Tree from "react-d3-tree";

import { TopNav } from "./components";
import TraderButton from "./components/Traders/TraderButton";
import Traderbar from "./components/Traders/Traderbar";

import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
const database = firebase.database();

function App() {
  const [data, setData] = useState("");
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
    })();
  }, []);

  return (
    <>
      <TopNav />
      <Traderbar trader={trader} />
      <TraderButton {...trader} />
      {data && (
        <Tree
          data={data}
          collapsible
          orientation="vertical"
          style={{ height: "100vh" }}
        />
      )}
    </>
  );
}

export default App;
