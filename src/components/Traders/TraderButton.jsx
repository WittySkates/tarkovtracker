/** @module Trader */

import React, { useContext } from "react";

import Spinner from "react-bootstrap/Spinner";

import TarkovContext from "../../tarkovContext";

import "./styles/traderbutton.scss";

const TraderButton = ({ traderName, imageLink, onClick }) => {
  const { values } = useContext(TarkovContext);
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
