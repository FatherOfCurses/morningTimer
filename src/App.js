import React from "react";
import logo from "./heroClock.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Morning Clock</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Trying to get the kids out the door on time</p>
      </header>
    </div>
  );
}

export default App;
