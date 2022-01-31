/** @module GeneralNav */

import React from "react";
import "./styles/generalnav.scss";

const GeneralNav = props => {
  const { navArray, className, setCurrentValue, currentValue } = props;
  return (
    <div className={`generalNav ${className}`}>
      {navArray.map((map, index) => (
        <div
          className={`navElement ${currentValue === map && "navSelected"}`}
          onClick={() => {
            setCurrentValue(map);
          }}
        >
          {map}
        </div>
      ))}
    </div>
  );
};

export default GeneralNav;
