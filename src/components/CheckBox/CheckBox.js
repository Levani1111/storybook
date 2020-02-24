import React from "react";
import "./CheckBox.css";
import uncheckedBlack from "./img/unchecked-black.png";
import checkedBlack from "./img/checked-black.png";
import uncheckedBlue from "./img/unchecked-blue.png";
import checkedBlue from "./img/checked-blue.png";

class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.checked,
      src: this.props.blue
        ? { uncheckedBlue }.uncheckedBlue
        : { uncheckedBlack }.uncheckedBlack
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    let newSrc;
    if (e.target.src.includes("unchecked-blue")) {
      newSrc = { checkedBlue }.checkedBlue;
      this.setState({
        checked: !this.state.checked,
        src: newSrc
      });
    } else if (e.target.src.includes("checked-blue")) {
      newSrc = { uncheckedBlue }.uncheckedBlue;
      this.setState({
        checked: !this.state.checked,
        src: newSrc
      });
    } else if (e.target.src.includes("unchecked-black")) {
      newSrc = { checkedBlack }.checkedBlack;
      this.setState({
        checked: !this.state.checked,
        src: newSrc
      });
    } else if (e.target.src.includes("checked-black")) {
      newSrc = { uncheckedBlack }.uncheckedBlack;
      this.setState({
        checked: !this.state.checked,
        src: newSrc
      });
    }
  }
  render() {
    return (
      <div className="checkbox">
        <img
          className="checkbox-button"
          src={this.state.src}
          alt="checkbox button"
          onClick={this.handleClick}
        />
        <p className="checkbox-label">{this.props.label}</p>
      </div>
    );
  }
}

export default CheckBox;
