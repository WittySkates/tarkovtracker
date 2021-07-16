/** @module Auth */

import React from "react";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import config from "../config";

firebase.initializeApp(config);
const auth = firebase.auth();
const database = firebase.database();
const provider = new firebase.auth.GoogleAuthProvider();

const SignIn = () => {
  auth
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      let credential = result.credential;
      // This gives you a Google Access Token. You can use it to access the Google API.
      let token = credential.accessToken;
      // The signed-in user info.
      let user = result.user;
      database.ref("users/" + user.uid).set({
        uid: user.uid,
        name: user.displayName,
        email: user.email,
      });
    })
    .catch((error) => {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // The email of the user's account used.
      let email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      let credential = error.credential;
    });
};

const Auth = () => {
  const [user, loading, error] = useAuthState(auth);

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
      <>
        <Button variant="outline-danger" onClick={() => auth.signOut()}>
          Sign Out
        </Button>
      </>
    );
  }
  return (
    <>
      <Button variant="primary" onClick={SignIn}>
        Sign In With Google
      </Button>
    </>
  );
};

export default Auth;

// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
// <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
// const uiConfig = {
//   signInFlow: "popup",
//   signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
//   callbacks: {
//     signInSuccessWithAuthResult: ({ user }) => {
//       database.ref("users/" + user.uid).update({
//         uid: user.uid,
//         name: user.displayName,
//         email: user.email,
//       });
//     },
//   },
// };
