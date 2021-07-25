/** @module Traderbar */

import React from "react";
import _ from "lodash";
import TraderButton from "./TraderButton";

import "./styles/traderbar.scss";

const Traderbar = props => {
  const { traderNames, traderQuests, setCurrentTrader } = props;
  return (
    <div className="traderbar">
      {traderNames &&
        traderNames.map((name, index) => (
          <TraderButton
            key={name}
            index={index}
            traderName={name}
            onClick={() => setCurrentTrader(index)}
            imageLink={traderQuests[name]?.image}
            tabIndex={index}
          />
        ))}
    </div>
  );
};

export default Traderbar;
