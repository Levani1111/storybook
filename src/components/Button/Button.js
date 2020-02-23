import React from 'react';
import './Button.css';
import "./cart.svg";
import Icon from "../Icon/Icon";

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
      "cart-small",
      "favorite",
      "favorite-small"
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
    
    //  prop icon 
    if (props.icon){
        classList += 'contains-icon';
        if(props.label==="" || props.label===undefined){
        innerHTML= <div className={'flex-button'}><Icon icon={props.icon}/></div>;
        }
        else{
        innerHTML= <div className={'flex-button'}><Icon icon={props.icon}/><span>{props.label}</span></div>;
    }}

    return <button className={classList} onClick={props.onClick}> 
        {props.label}
    </button>
}



export default Button; 