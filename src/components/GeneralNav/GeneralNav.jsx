/** @module GeneralNav */

import React, { useEffect } from "react";
import $ from "jquery";
import "./styles/generalnav.scss";

const GeneralNav = props => {
  const { navArray, className, setCurrentValue, currentValue } = props;

  return (
    <div className={`generalNav ${className}`}>
      {navArray.map((map, index) => (
        <div
          className={`navElement ${currentValue === map && "navSelected"} ${currentValue}`}
          onClick={() => {
            setCurrentValue(map);
          }}
        >
          {map}
        </div>
      ))}
      <div className="navSlider" />
    </div>
  );
};

export default GeneralNav;
