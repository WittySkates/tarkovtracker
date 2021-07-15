import React from "react";
import "./App.css";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import config from "./config";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

firebase.initializeApp(config);
const auth = firebase.auth();
const database = firebase.database();

const SignOut = () => (
  <button className="sign-out" onClick={() => auth.signOut()}>
    Sign Out
  </button>
);

function App() {
  const [user, loading, error] = useAuthState(auth);
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: (user) => {
        console.log(user);
        database.ref("users/" + user.uid).update({
          uid: user.uid,
          name: user.displayName,
          email: user.email,
        });
      },
    },
  };
  if (loading) {
    return (
      <div>
        <p>Initialising User...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }
  if (user) {
    return (
      <div>
        <h1>Testing</h1>
        <div id="firebaseui-auth-container"></div>
        <SignOut />
      </div>
    );
  }
  return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />;
}

export default App;
