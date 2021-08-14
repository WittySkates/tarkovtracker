/** @module QuestPopup */

import React from "react";
import _ from "lodash";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  makeStyles,
} from "@material-ui/core";

import "./styles/questpopup.scss";
import Checkbox from "../Checkbox/Checkbox";
import { HyperLinkIcon } from "../Icons/Icons";

const useDialogContentTextStyles = makeStyles(() => {
  return {
    root: {
      marginBottom: 0,
    },
  };
});

const useDialogStyles = makeStyles(() => {
  return {
    paper: {
      backgroundColor: "transparent",
      maxHeight: 600,
      maxWidth: 1500,
      width: 700,
    },
  };
});
const QuestPopup = ({
  isOpen,
  handleClose,
  data,
  checkboxOnChange,
  isChecked,
}) => {
  const dialogClasses = useDialogStyles();
  const dialogContentTextClasses = useDialogContentTextStyles();

  return (
    <Dialog classes={dialogClasses} open={isOpen} onClose={handleClose}>
      <DialogTitle className="questpopup">
        {
          <div className="header-wrapper">
            <div className="header">
              <h2>{data.name}</h2>
              <Checkbox
                className={_.compact([
                  "questpopup-checkbox",
                  isChecked && "checkbox-checked",
                ]).join(" ")}
                isChecked={isChecked}
                onChange={checkboxOnChange}
              />
            </div>
            <HyperLinkIcon
              className="link-icon"
              onClick={() => window.open(data.attributes?.link)}
            />
          </div>
        }
      </DialogTitle>
      <DialogContent className="questpopup">
        <DialogContentText
          className="questpopup"
          classes={dialogContentTextClasses}
        >
          {"Type: " + data.attributes?.type}
          <br />
          <br />
          Objectives
          <br />
          <ul>
            {data.attributes?.Objectives.map((obj) => (
              <li key={obj}>{obj}</li>
            ))}
          </ul>
          Rewards
          <br />
          <ul>
            {data.attributes?.Rewards.map((rew) => (
              <li key={rew}>{rew}</li>
            ))}
          </ul>
          <br />
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default QuestPopup;
