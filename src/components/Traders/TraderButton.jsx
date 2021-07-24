/** @module TraderButton */

import React from "react";
import Spinner from "react-bootstrap/Spinner";

import "./styles/traderbar.scss";

const TraderButton = ({ traderName, imageLink, onClick }) => {
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
