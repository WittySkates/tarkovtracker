import React from "react";
import "./App.css";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import config from "./config";
import { Auth, Nav } from "./components";
// import 'bootstrap/dist/css/bootstrap.min.css';

firebase.initializeApp(config);
const auth = firebase.auth();
const database = firebase.database();

function App() {
  return (
    <>
      <Nav />
      <Auth auth={auth} database={database} />
    </>
  );
}

export default App;
