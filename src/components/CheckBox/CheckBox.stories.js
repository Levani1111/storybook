import React from "react";
import { storiesOf } from "@storybook/react";
import Checkbox from "./CheckBox";
// ----------------------------------------------------------
storiesOf("Check Box", module)
  
  .add("Black CheckBox", () => <Checkbox checked={false} black />)
  .add("Blue CheckBox", () => <Checkbox checked={false} blue />)
  .add("Black CheckBox w/Label", () => (
    <Checkbox checked={false} label="Don't show this popup again" />
  ));
  
