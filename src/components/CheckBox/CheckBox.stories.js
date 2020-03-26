import React from "react";
import { storiesOf } from "@storybook/react";
import CheckBox from "./CheckBox";
// ----------------------------------------------------------
storiesOf("Check Box", module)
  
  .add("Black CheckBox", () => <CheckBox checked={false} black />)
  .add("Blue CheckBox", () => <CheckBox checked={false} blue />)
  .add("Black CheckBox w/Label", () => (
    <CheckBox checked={false} label="Don't show this popup again" />
  ));
  
