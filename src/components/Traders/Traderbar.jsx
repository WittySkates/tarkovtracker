/** @module Traderbar */

import React from "react";
import TraderButton from "./TraderButton";

import "./styles/traderbar.scss";

const Traderbar = props => {
  const { traderNames, traderQuests, currentTrader, setCurrentTrader, traderTrees } = props;
  return (
    <div className="traderbar">
      {traderNames &&
        traderNames.map((el, index) => (
          <TraderButton
            className={currentTrader === index && "selected"}
            key={el.name}
            index={index}
            traderName={el.name}
            onClick={() => setCurrentTrader(index)}
            imageLink={traderQuests[el.name]?.image}
            // imageLink={traderTrees[index]}
            tabIndex={index}
          />
        ))}
    </div>
  );
};

export default Traderbar;
