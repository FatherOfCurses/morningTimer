import React from "react";
import logo from "./heroClock.png";
import TimeForm from "./timeForm/TimeForm";

import "./App.css";

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <h1>Morning Clock</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Trying to get the kids out the door on time</p>
      </header>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <TimeForm />
        <script src="https://unpkg.com/react/umd/react.production.min.js" />

        <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" />

        <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" />

        <script>var Alert = ReactBootstrap.Alert;</script>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
      </>
    );
  }
}

export default App;
