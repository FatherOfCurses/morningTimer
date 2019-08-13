import React from "react";
import "./TimeForm.css";
import Clock from "react-live-clock";

class TimeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: Clock.toString,
      targetTime: "",
      timeDifference: "45 minutes"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Target time set to " + this.state.value);
    event.preventDefault();
  }
  // TODO: apply CSS to this section
  render() {
    return (
      <div id="form" className="body">
        <form onSubmit={this.handleSubmit}>
          <div />
          <p>Current Time</p>
          <Clock />
          <p>Target Time</p>
          <p>{this.state.value}</p>
          <div class="formGroup">
            <label for="targettime">
              Target Time:
              <input
                type="text"
                className="input"
                id="targettime"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            {
              // TODO: add handling to prevent target time from being before start time
            }
            <input
              type="submit"
              value="Go!"
              onClick={() => (this.state.startTime = Clock.value())}
            />
          </div>
          <p>Time Difference</p>
          <p>{this.state.timeDifference}</p>
        </form>
      </div>
    );
  }
}

export default TimeForm;
