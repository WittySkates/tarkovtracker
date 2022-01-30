/** @module GeneralNav */

import React from "react";
import "./styles/generalnav.scss";

const GeneralNav = props => {
  const { navArray, className, setCurrentValue } = props;
  return (
    <div className={`generalNav ${className}`}>
      {navArray.map((map, index) => (
        <div
          className="navElement"
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
