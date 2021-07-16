import React from "react";
import "./App.css";
import firebase from "firebase"
import config from "./config";
import {Auth} from "./components"
// import 'bootstrap/dist/css/bootstrap.min.css';

firebase.initializeApp(config);
const auth = firebase.auth();
const database = firebase.database();

function App() {
  return <Auth auth={auth} database={database} />
}

export default App;
