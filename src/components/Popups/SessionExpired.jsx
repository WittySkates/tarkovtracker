/** @module SignInPopup */

import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  makeStyles
} from "@material-ui/core";
import Button from "react-bootstrap/Button";

import "./styles/sessionpopup.scss";

const useStyles = makeStyles(() => {
  return {
    paper: {
      backgroundColor: "transparent"
    }
  };
});

const SessionExpired = ({ isOpen, handleClose }) => {
  const dialogClasses = useStyles();
  return (
    <Dialog classes={dialogClasses} open={isOpen} onClose={handleClose}>
      <DialogTitle className="sessionpopup">Your session has expired</DialogTitle>
      <DialogContent className="sessionpopup">
        <DialogContentText className="sessionpopup">
          {`To keep using the site, please reconnect`}
        </DialogContentText>
      </DialogContent>
      <DialogActions className="sessionpopup">
        <Button onClick={handleClose}>Reconnect</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SessionExpired;
