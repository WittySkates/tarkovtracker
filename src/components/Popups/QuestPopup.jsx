/** @module QuestPopup */

import React from "react";
import _ from "lodash";
import { Dialog, DialogTitle, DialogContent, makeStyles } from "@material-ui/core";

import "./styles/questpopup.scss";
import Checkbox from "../Checkbox/Checkbox";

const useDialogStyles = makeStyles(() => {
  return {
    paper: {
      backgroundColor: "transparent",
      maxHeight: 600,
      maxWidth: 1500,
      width: 700
    }
  };
});
const QuestPopup = ({ isOpen, handleClose, data, checkboxOnChange, isChecked }) => {
  const dialogClasses = useDialogStyles();

  return (
    <Dialog classes={dialogClasses} open={isOpen} onClose={handleClose}>
      <DialogTitle className="questpopup">
        {
          <div className="quespopup-header">
            <a href={data.attributes?.link} target="_blank" rel="noreferrer">
              <h2>{data.name}</h2>
            </a>
            <Checkbox
              className={_.compact(["questpopup-checkbox", isChecked && "checkbox-checked"]).join(
                " "
              )}
              isChecked={isChecked}
              onChange={checkboxOnChange}
            />
          </div>
        }
      </DialogTitle>
      <DialogContent className="questpopup">
        {data?.attributes?.noPriorNext && (
          <>
            <div className="issue">
              There may be an issue with this quest's ordering which is provided by the Wiki.
            </div>
            <br />
          </>
        )}
        Type: {data.attributes?.type}
        <br />
        <br />
        Objectives
        <br />
        <ul>
          {data.attributes?.Objectives?.map(obj => (
            <li key={obj}>{obj}</li>
          ))}
        </ul>
        Rewards
        <br />
        <ul>
          {data.attributes?.Rewards?.map(rew => (
            <li key={rew}>{rew}</li>
          ))}
        </ul>
        Required for Kappa:{" "}
        {data.attributes?.kappa === undefined ? "Unknown" : data.attributes?.kappa ? "Yes" : "No"}
        <br />
        <br />
      </DialogContent>
    </Dialog>
  );
};

export default QuestPopup;
