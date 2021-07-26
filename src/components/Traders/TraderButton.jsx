/** @module TraderButton */

import React from "react";
import _ from "lodash";
import Spinner from "react-bootstrap/Spinner";

import "./styles/traderbar.scss";

const TraderButton = ({ traderName, imageLink, onClick, className }) => {
  return (
    <div
      className={_.compact([`trader-icon`, className]).join(" ")}
      onClick={onClick}
    >
      {imageLink ? (
        <img src={imageLink} alt={traderName} />
      ) : (
        <Spinner className="loading-spinner" animation="border" />
      )}
    </div>
  );
};

export default TraderButton;
