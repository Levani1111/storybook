import React from "react";
import Checkbox from "./Checkbox";
import { storiesOf } from "@storybook/react";

storiesOf("Checkbox", module)
  .add("Checkbox-black", () => (
    <Checkbox name="black" text="this is some optional text" color="black" />
  ))
  .add("Checkbox-blue", () => (
    <Checkbox name="blue" text="this is some optional text" color="blue" />
  ));
