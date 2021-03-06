import React, { Component } from "react";
//----------------------------------------------
export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.props.value
    };
  }
  increase = () => {
    if (this.state.number + this.props.step <= this.props.max) {
      if (this.props.step) {
        let newStep = this.props.step;
        let count = this.state.number + newStep;
        this.setState({ number: count });
      } else {
        let newCount = this.state.number + 1;
        this.setState({ number: newCount });
      }
    }
  };

  decrease = () => {
    if (this.state.number - this.props.step >= this.props.min) {
      if (this.props.step) {
        let newStep = this.props.step;
        let count = this.state.number - newStep;

        this.setState({ number: count });
      } else {
        let newCount = this.state.number - 1;
        this.setState({ number: newCount });
      }
    }
  };
  render() {
    return (
      <div style={counterStyle}>
        <button style={buttonStyle} onClick={this.decrease}>
          -
        </button>
        <div>{this.state.number}</div>
        <button style={buttonStyle} onClick={this.increase}>
          +
        </button>
      </div>
    );
  }
}
export default Counter;

const counterStyle = {
  backgroundColor: "#F6F7F8",
  display: "flex",
  flexDirection: "row",
  width: "116px",
  height: "46px",
  color: "#262626",
  alignItems: "center",
  justifyContent: "space-around",
  fontSize: "20px",
  borderRadius: "4px"
};
const buttonStyle = {
  backgroundColor: "#F6F7F8",
  color: "#33A0FF",
  height: "46px",
  width: "25px",
  textAlign: "center",
  padding: "0"
};
