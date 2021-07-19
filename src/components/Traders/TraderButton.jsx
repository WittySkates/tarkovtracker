/** @module Trader */

import React from "react";

import Spinner from "react-bootstrap/Spinner";

import useTarkovContext from "../../hooks/useTarkovContext";

import "./styles/traderbutton.scss";

const TraderButton = ({ traderName, imageLink, onClick }) => {
  const { values } = useTarkovContext();
  // console.log(values);
  return (
    <div className="trader-icon" onClick={onClick}>
      {imageLink ? (
        <img src={imageLink} alt={traderName} />
      ) : (
        <Spinner className="loading-spinner" animation="border" />
      )}
    </div>
  );
};

export default TraderButton;
