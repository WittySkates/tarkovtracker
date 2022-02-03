/** @module MUINav */

import React from "react";
import { Tabs, Tab } from "@mui/material";
import { colors } from "../../constants";
import "./styles/muinav.scss";

const tabsStyles = {
  ".MuiTabs-indicator": { backgroundColor: colors.tarovBrownHighlight },
  ".MuiTabs-scrollButtons": { color: colors.tarovBrownHighlight }
};

const tabStyles = {
  backgroundColor: colors.navColor,
  color: colors.tarovBrownHighlight,
  width: "0px",
  minWidth: "120px",
  "&.Mui-selected": {
    color: `${colors.tarovBrownHighlight}`,
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
        <Tab value={map} label={map} sx={tabStyles} />
      ))}
    </Tabs>
  );
};

export default MUINav;
