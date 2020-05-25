import React from "react";
import "./TimeForm.css";
import Clock from "react-live-clock";
import Moment from "moment";
import Alert from "react-bootstrap/Alert";

class TimeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: "",
      targetTime: "",
      timeDifference: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getTimeDifference = this.getTimeDifference.bind(this);
  }

  handleChange(event) {
    this.setState({ targetTime: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert("Target time set to " + this.state.targetTime);
  }

  getTimeDifference() {
    // parse time using 24-hour clock and use UTC to prevent DST issues
    var start = Moment.now();
    var end = Moment(this.state.targetTime, "HH:mm");
    this.setState({
      timeDifference: Moment.duration(end.diff(start)).toString()
    });
    this.startTime = start.toString;
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
          <p>{this.state.targetTime}</p>
          <div className="formGroup">
            <label htmlFor="targettime">
              Target Time:
              <input
                type="time"
                className="input"
                id="targettime"
                value={this.state.targetTime}
                onChange={this.handleChange}
              />
            </label>
            {
              // TODO: add handling to prevent target time from being before start time
            }
            <input type="submit" value="Go!" onClick={this.getTimeDifference} />
          </div>
          <p>Time Difference</p>
          <p>{this.state.timeDifference}</p>
        </form>
      </div>
    );
  }
}

export default  TimeForm;
