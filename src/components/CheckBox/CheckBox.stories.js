import React from "react";
import { storiesOf } from "@storybook/react";
import CheckBox from "./CheckBox";
// ----------------------------------------------------------
storiesOf("Check Box", module)
  .add("Black CheckBox", () => <CheckBox checked={true} />)
  .add("Blue CheckBox", () => <CheckBox checked={true} blue />)
  .add("Black CheckBox w/Label", () => (
    <CheckBox checked={true} label="Don't show this popup again" />
  ));
