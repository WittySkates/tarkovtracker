/** @module Auth */

import React from "react";
import { SignIn, auth } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/auth.scss";

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
      <Button
        className="tarkov-auth-signout"
        variant="outline-danger"
        onClick={() => {
          auth.signOut();
        }}
      >
        Sign Out
      </Button>
    );
  }
  return (
    <Button className="signin" onClick={() => SignIn()}>
      Sign In With Google
    </Button>
  );
};

export default Auth;
