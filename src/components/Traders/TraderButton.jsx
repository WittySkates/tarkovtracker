/** @module Trader */

import React from "react";
import firebase from "firebase/app";
import "firebase/database";
import "./styles/trader.scss";

const TraderButton = ({ traderName, onClick }) => {
  const database = firebase.database();
  let traderImage = database
    .ref("traderTree/Fence/image")
    .get()
    .then(snapshot => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No trader image");
      }
    })
    .catch(error => {
      console.log(error);
    });

  return (
    <div className="trader-icon" onClick={onClick}>
      <img src={traderImage} alt="Fence" />
    </div>
  );
};

export default TraderButton;
