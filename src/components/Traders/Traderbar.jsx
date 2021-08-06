/** @module Traderbar */

import React from "react";
import TraderButton from "./TraderButton";

import "./styles/traderbar.scss";

const Traderbar = props => {
  const { traderNames, traderQuests, currentTrader, setCurrentTrader } = props;
  return (
    <div className="traderbar">
      {traderNames &&
        traderNames.map((name, index) => (
          <TraderButton
            className={currentTrader === index && "selected"}
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
