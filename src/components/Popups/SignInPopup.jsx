/** @module SignInPopup */

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
import Auth from "../Auth";

import "./styles/signinpopup.scss";

const useStyles = makeStyles(() => {
  return {
    paper: {
      backgroundColor: "transparent",
    },
  };
});

const SignInPopup = ({ isOpen, handleClose }) => {
  const dialogClasses = useStyles();
  return (
    <Dialog classes={dialogClasses} open={isOpen} onClose={handleClose}>
      <DialogTitle className="signinpopup">
        Sign in to use this feature
      </DialogTitle>
      <DialogContent className="signinpopup">
        <DialogContentText className="signinpopup">
          {`Signing in allows you to save data across devices and use all features`}
        </DialogContentText>
      </DialogContent>
      <DialogActions className="signinpopup">
        <Button onClick={handleClose}>Cancel</Button>
        <Auth />
      </DialogActions>
    </Dialog>
  );
};

export default SignInPopup;
