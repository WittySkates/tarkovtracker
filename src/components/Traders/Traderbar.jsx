/** @module Traderbar */

import React from "react";
import _ from "lodash";
import TraderButton from "./TraderButton";

import "./styles/traderbar.scss";

const Traderbar = props => {
  const { traderNames } = props;
  return (
    <div className="traderbar">
      What happened to the dark background
      {traderNames &&
        traderNames.map(name => <TraderButton traderName={name} />)}
    </div>
  );
};

export default Traderbar;
