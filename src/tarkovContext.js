/** @mdoule tarkovContext */

import React, { createContext, useState } from "react";
import _ from "lodash";

const TarkovContext = createContext();

export const TarkovProvider = ({ children, values }) => {
  const [currentValues, setCurrentValues] = useState(values || {});

  // Setters (Should have one for updating a path maybe discuss)
  const setValues = (values) => setCurrentValues(values);

  const setValue = (path, value) => {
    const newValues = _.cloneDeep(currentValues);
    _.set(newValues, path, value);
    setCurrentValues(newValues);
  };

  return (
    <TarkovContext.Provider
      value={{ values: currentValues, setValues, setValue }}
    >
      {children}
    </TarkovContext.Provider>
  );
};

export default TarkovContext;
