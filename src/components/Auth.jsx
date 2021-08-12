/* eslint-disable no-unused-vars */
/** @module Auth */

import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import config from "../config";

// Components
import Button from "react-bootstrap/Button";

// Hooks / Context
import { useAuthState } from "react-firebase-hooks/auth";
import useTarkovContext from "../hooks/useTarkovContext";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
firebase.initializeApp(config);

const Auth = () => {
  const auth = firebase.auth();
  const database = firebase.database();
  const provider = new firebase.auth.GoogleAuthProvider();
  const [user, loading, error] = useAuthState(auth);
  const { setValue } = useTarkovContext();

  const SignIn = setValue => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        /** @type {firebase.auth.OAuthCredential} */
        let credential = result.credential;
        // This gives you a Google Access Token. You can use it to access the Google API.
        let token = credential.accessToken;
        // The signed-in user info.
        let user = result.user;
        setValue("user", user);

        database.ref("users/" + user.uid).update({
          uid: user.uid,
          name: user.displayName,
          email: user.email,
        });
      })
      .catch(error => {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        // The email of the user's account used.
        let email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        let credential = error.credential;
      });
    database
      .ref("traderTree")
      .get()
      .then(snapshot => {
        if (snapshot.exists()) {
          setValue("traderNames", Object.keys(snapshot.val()));
        } else {
          console.log("traderTree does not exist in the database");
        }
      })
      .catch(error => {
        console.log("Erroring getting traderTree" + error);
      });
  };
  if (error) {
    console.log(error);
    return (
      <div>
        <p>Couldn't Log You in: {error}</p>
      </div>
    );
  }
  if (loading) {
    return (
      <div>
        <p>...Initializing User</p>
      </div>
    );
  }
  if (user) {
    return (
      <Button
        className="tarkov-auth-signout"
        variant="outline-danger"
        onClick={() => {
          setValue("user", null);
          auth.signOut();
        }}
      >
        Sign Out
      </Button>
    );
  }
  return (
    <Button variant="primary" onClick={() => SignIn(setValue)}>
      Sign In With Google
    </Button>
  );
};

export default Auth;
