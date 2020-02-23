import React from 'react';
import './Button.css';

// This is a functional component - just sent up a little differently as an arrow function!
const Button = (props) => {
    let classList = ''
    let types = [
      "primary",
      "Danger",
      "warning",
      "success",
      "Default",
     
    ];
    if (types.includes(props.type)) {
        classList += ` button-${props.type}`
    }
    if (props.large) {
        classList += ` button-large`
    }
    if (props.border){
        classList += ` button-border-${props.type}`
    }
    if (props.pale){
        classList += ` button-pale-${props.type}`
    }
    if (props.icon && !props.label) {
      classList += " icon-solo";
    }
    if (props.icon && props.label) {
      classList += " icon";
    }
    return <button className = {classList}>
       <img className = "symbol" src={props.icon}/>  {props.label}
    </button>
}
    return <button className={classList} onClick={props.onClick}> 
        {props.label}
    </button>




export default Button; 