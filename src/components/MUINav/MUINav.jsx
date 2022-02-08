/** @module MUINav */

import React from "react";
import { Tabs, Tab } from "@mui/material";
import { colors } from "../../constants";
import "./styles/muinav.scss";

const tabsStyles = {
  ".MuiTabs-indicator": { backgroundColor: colors.tarkovBrownHighlight },
  ".MuiTabs-scrollButtons": { color: colors.tarkovBrownHighlight }
};

const tabStyles = {
  fontFamily: "Bender",
  fontWeight: 400,
  backgroundColor: colors.navColor,
  color: colors.tarkovBrownHighlight,
  width: "0px",
  minWidth: "120px",
  "&.Mui-selected": {
    color: `${colors.tarkovBrownHighlight}`,
    backgroundColor: `#ffffff25`
  }
};

const MUINav = props => {
  const { navArray, currentValue, setCurrentValue } = props;
  const handleChange = (event, newValue) => {
    setCurrentValue(newValue);
  };

  return (
    <Tabs
      value={currentValue}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="auto"
      sx={tabsStyles}
    >
      {navArray.map((map, index) => (
        <Tab value={map} label={map} sx={tabStyles} key={map} />
      ))}
    </Tabs>
  );
};

export default MUINav;
