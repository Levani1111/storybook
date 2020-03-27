import React from "react";
import { storiesOf } from "@storybook/react";
import Checkbox from "./CheckBox";
// ----------------------------------------------------------
storiesOf("Check Box", module)
  .add("Black CheckBox", () => <Checkbox type="Checkbox" default />)
  .add("Blue CheckBox", () => <Checkbox type="Checkbox" blue />)
  .add(
    "Black CheckBox w/Label", () => <Checkbox type="Checkbox" label="Label" defaultText/>
  )
  
