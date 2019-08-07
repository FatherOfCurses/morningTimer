import React from "react";
import "./TimeForm.css";

class TimeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

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

  render() {
    return (
      <div id="form" className="body">
        <form onSubmit={this.handleSubmit}>
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
            <input type="submit" value="Go!" />
          </div>
        </form>
      </div>
    );
  }
}

export default TimeForm;
