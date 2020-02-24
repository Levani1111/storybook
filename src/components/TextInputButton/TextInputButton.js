import React from "react";
import Form from "../Forms/Form.js";
import "./TextInputButton.css";

export default function TextInputButton(props) {
  if (props.medium) {
    return (
      <div class="mediumDiv">
        <Form
          onChange={props.onChange}
          onSubmit={props.action}
          place={props.placeholder}
          medium
        />
        <button onClick={props.action} className="inputButton">
          {props.title}
        </button>
      </div>
    );
  } else {
    return (
      <div class="largeDiv">
        <Form
          onChange={props.onChange}
          onSubmit={props.action}
          place={props.placeholder}
          large
        />
        <button onClick={props.action} className="inputButton bigButton">
          {props.title}
        </button>
      </div>
    );
  }
}
