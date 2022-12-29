import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { firebaseConfig, firebaseConfigDev, dev } from "../config";

if (dev) {
  firebase.initializeApp(firebaseConfigDev);
} else {
  firebase.initializeApp(firebaseConfig);
}

export const database = firebase.database();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

/* Authenticaiton  */

export const SignIn = () => {
  auth
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      let user = result.user;

      database.ref("users/" + user.uid).update({
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        creationTime: user.metadata.creationTime,
      });
    })
    .catch(() => {});
};

/* Databse calls */

export const basicRealtimeApiCall = async (path) => {
  let data;
  let error;
  await database
    .ref(path)
    .get()
    .then((snapshot) => {
      if (snapshot.exists()) {
        data = snapshot.val();
      } else {
        data = null;
      }
    })
    .catch((e) => {
      error = e;
    });
  return { data, error };
};
