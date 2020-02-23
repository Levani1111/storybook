import React from "react";
import { storiesOf } from "@storybook/react";

import TextInputButton from "./TextInputButton.js.js";

let inputValue = "";
function onChange(e) {
  e.preventDefault();
  inputValue = e.target.value;
}
function myFunction(e) {
  e.preventDefault();
  alert(`You wrote " ${inputValue} "`);
}

storiesOf("Input with Button", module)
  .add("Medium", () => (
    <TextInputButton
      medium
      placeholder="Voucher code"
      title="Redeem"
      onChange={onChange}
      action={myFunction}
    />
  ))
  .add("Large", () => (
    <TextInputButton
      large
      placeholder="Voucher code"
      title="Redeem"
      onChange={onChange}
      action={myFunction}
    />
  ));
