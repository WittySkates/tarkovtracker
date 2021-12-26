/** @module TraderButton */

import React from "react";
import _ from "lodash";
import Spinner from "react-bootstrap/Spinner";

import "./styles/traderbar.scss";

const TraderButton = ({ traderName, imageLink, onClick, className, totalCount, doneCount }) => {
  const ratio = (doneCount / totalCount) * 100;
  return (
    <div className={_.compact([`trader-icon`, className]).join(" ")} onClick={onClick}>
      {imageLink ? (
        <img src={imageLink} alt={traderName} />
      ) : (
        <Spinner className="loading-spinner" animation="border" />
      )}
      <svg viewBox="0 0 36 36" className="circular-chart">
        {/* <path
          className="circle-bg"
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        /> */}
        <path
          className={`circle ${ratio === 100 ? "finished" : ""}`}
          strokeDasharray={`${ratio}, 100`}
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
    </div>
  );
};

export default TraderButton;
