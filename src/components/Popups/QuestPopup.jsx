/** @module QuestPopup */

import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  makeStyles,
} from "@material-ui/core";
import Button from "react-bootstrap/Button";

import "./styles/questpopup.scss";

const useStyles = makeStyles(() => {
  return {
    paper: {
      backgroundColor: "transparent",
    },
  };
});

const QuestPopup = ({ isOpen, handleClose, title, text }) => {
  const dialogClasses = useStyles();
  return (
    <Dialog classes={dialogClasses} open={isOpen} onClose={handleClose}>
      <DialogTitle className="questpopup">{title}</DialogTitle>
      <DialogContent className="questpopup">
        <DialogContentText className="questpopup">{text}</DialogContentText>
      </DialogContent>
      <DialogActions className="questpopup">
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default QuestPopup;
