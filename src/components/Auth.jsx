/** @module Auth */

import React from "react";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
// import 'bootstrap/dist/css/bootstrap.min.css';


const Auth = ({auth, database}) => {
  const [user, loading,error] = useAuthState(auth);
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
        signInSuccessWithAuthResult: ({user}) => {
        database.ref("users/" + user.uid).update({
          uid: user.uid,
          name: user.displayName,
          email: user.email,
        });
      },
    },
  };
  if (error) {
    console.log(error)
    return (
      <div>
        <p>Couldn't Log You in: {error}</p>
      </div>
    );
  }
  if(loading){
    return (
      <div>
        <p>...Initializing User</p>
      </div>
    );  }
  if (user) {
    return (
      <div>
        <button className="sign-out" onClick={() => auth.signOut()}>
            Sign Out
        </button>
      </div>
    );
  }
  return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />;
}

export default Auth;