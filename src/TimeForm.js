import React from "react";

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
      <div id="form">
        <form onSubmit={this.handleSubmit}>
          <label>
            Target Time:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Go!" />
        </form>
      </div>
    );
  }
}

export default TimeForm;
