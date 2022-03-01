/** @module Traderbar */

import React from "react";
import TraderButton from "./TraderButton";
import { getDoneCount } from "../../utils/common";
import { connect } from "react-redux";
import "./styles/traderbar.scss";

const mapStateToProps = state => {
  return { completedQuests: state.completedQuests.value };
};
const Traderbar = props => {
  const { traderInfo, currentTrader, setCurrentTrader, completedQuests } = props;
  return (
    <div className="traderbar">
      {traderInfo &&
        traderInfo.map((el, index) => (
          <TraderButton
            className={currentTrader === index && "selected"}
            key={el.name}
            index={index}
            traderName={el.name}
            onClick={() => setCurrentTrader(index)}
            imageLink={el.image}
            tabIndex={index}
            totalCount={Object.keys(traderInfo[index].quests).length}
            doneCount={getDoneCount(completedQuests?.[el?.name] ?? {}, el?.quests ?? {})}
          />
        ))}
    </div>
  );
};

export default connect(mapStateToProps)(Traderbar);
