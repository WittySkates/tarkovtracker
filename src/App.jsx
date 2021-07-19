import React from "react";
import _ from "lodash";
import firebase from "firebase/app";
import "firebase/database";

import { TopNav } from "./components";
import TraderButton from "./components/Traders/TraderButton";
import Traderbar from "./components/Traders/Traderbar";

import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
const database = firebase.database();

const testingTree = async () => {
  const traderQuests = await database
    .ref("traderQuests")
    .get()
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return null;
      }
    })
    .catch((error) => {
      console.log("Erroring getting trader tree" + error);
    });
  //console.log(traderTree);
};

function App() {
  testingTree();
  const trader = {
    traderName: "Prapor",
    imageLink:
      "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/6/6b/Prapor_Portrait.png",
  };
  // const traderList = _.times();
  return (
    <>
      <TopNav />
      <Traderbar trader={trader} />
      <TraderButton {...trader} />
    </>
  );
}

export default App;
