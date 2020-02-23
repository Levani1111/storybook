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
      "cart",
      
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
    return <button className={classList} onClick={props.onClick}> 
        {props.label}
    </button>
}


export default Button; 