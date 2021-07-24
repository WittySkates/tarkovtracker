/** @module useTarkovContext */

import { useContext } from "react";
import TarkovContext from "../tarkovContext";

const useTarkovContext = () => {
  const context = useContext(TarkovContext);
  return context;
};

export default useTarkovContext;
