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
      <svg height="100%" width="100%" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <circle
          className={`circle ${ratio === 100 ? "finished" : ""}`}
          strokeDasharray={`${ratio}, 100`}
          cx="60"
          cy="60"
          r="53 "
          pathLength="100"
        />
      </svg>
      {/* Another way to draw the percentage circle. Does not have dot at 0% */}
      {/* <svg height="100%" width="100%" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <circle
          className={`percent ${ratio === 100 ? "finished" : ""}`}
          strokeDashoffset={100 - ratio}
          cx="60"
          cy="60"
          r="54"
          pathLength="100"
        />
      </svg> */}
    </div>
  );
};

export default TraderButton;
