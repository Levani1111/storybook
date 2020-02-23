import React from "react";
import { storiesOf } from "@storybook/react";

import Counter from "./Counter.js";
// ----------------------------------------------------
storiesOf("Counter", module).add("Counter", () => (
  <Counter max={99} min={-99} value={1} step={1} />
));
