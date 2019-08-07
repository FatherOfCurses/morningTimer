import React from "react";
import logo from "./heroClock.png";
import TimeForm from "./TimeForm";
import Clock from "react-live-clock";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <h1>Morning Clock</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p>Trying to get the kids out the door on time</p>
            <p>Current Time</p>
            <Clock />
            <p>Target Time</p>
            <p />
          </header>
        </div>
        <TimeForm />
      </React.Fragment>
    );
  }
}

export default App;
