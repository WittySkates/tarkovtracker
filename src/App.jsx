import React from "react";
import "./App.css";
import { TopNav } from "./components";
import TraderButton from "./components/Traders/TraderButton";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <TopNav />
      <TraderButton traderName="Prapor" />
    </>
  );
}

export default App;
