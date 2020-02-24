import React from "react";
import "./CheckBox.css";
import CheckBox from "./CheckBox";
import checkedBlack2 from "../img/checkedBlack2.svg";
import checkboxblack from "../img/checkboxblack.svg";
import checkboxblue2 from "../img/checkboxblue2.svg";
import checkedblue from  "../img/checkedblue.svg";
// --------------------------------------------------------
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
    if (e.target.src.includes("checkboxblue2")) {
      newSrc = { checkboxblue2 }.checkboxblue2;
      this.setState({
        checked: !this.state.checked,
        src: newSrc
      });
    } else if (e.target.src.includes("checkedblue")) {
             newSrc = { checkedblue }.checkedblue;
             this.setState({
               checked: !this.state.checked,
               src: newSrc
             });
           } else if (e.target.src.includes("checkedBlack2")) {
                    newSrc = { checkedBlack2 }.checkedBlack2;
                    this.setState({
                      checked: !this.state.checked,
                      src: newSrc
                    });
                  } else if (e.target.src.includes("checkboxblack")) {
                           newSrc = { checkboxblack }.checkboxblack;
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
