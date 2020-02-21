import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

// const style = {
//   backgroundColor: "#0069D9",
//   color: "white",
//   borderRadius: "2px",
//   padding: "5px 25px",
//   border: "#0069D9"
// };

// const successStyle = {
//   backgroundColor: "red",
//   color: "white",
//   borderRadius: "2px",
//   padding: "5px 25px",
//   border: "black"
// };

//const Danger = {
  //backgroundColor: "green",
  //color: "white",
  //borderRadius: "2px",
  //padding: "5px 25px",
  //border: "black"
//};

// const warningStyle = {
//   backgroundColor: "black",
//   color: "white",
//   borderRadius: "2px",
//   padding: "5px 25px",
//   border: "black"
// };

storiesOf("Button", module)
  .add("Primary1", () => <Button label="Do something" type="primary1" />)
  .add("Primary2", () => <Button label="Do something" type="primary2" />)
  .add("Primary3", () => <Button label="Do something" type="primary3" />)
  .add("Primary4", () => <Button label="Do something" type="primary4" />)
  .add("Primary5", () => <Button label="Do something" type="primary5" large />)
  .add("Primary6", () => <Button label="Do something" type="primary6" large />)
  .add("Primary7", () => <Button label="Do something" type="primary7" large />)
  .add("Danger1", () => <Button label="Do something" type="danger1" />)
  .add("Danger2", () => <Button label="Do something" type="danger2" />)
  .add("Danger3", () => <Button label="Do something" type="danger3" />)
  .add("Danger4", () => <Button label="Do something" type="danger4" />)
  .add("Danger5", () => <Button label="Do something" type="danger5" large />)
  .add("Danger6", () => <Button label="Do something" type="danger6" large />)
  .add("Danger7", () => <Button label="Do something" type="danger7" large />)

  .add("Success", () => <Button label="Success" type="success" />)
  .add("Success large", () => <Button label="Success" type="success" large />)
  .add("Success border", () => <Button label="Success" type="success" border />)
  .add("Success border large", () => <Button label="Success" type="success" border large />)
  .add("Success  pale", () => <Button label="Success" type="success" pale  />)
  .add("Success pale  large", () => <Button label="Success" type="success" pale large />)
  

  //   .add("Warining", () => <Button label="Warining" type="warning" />)
  .add("Large Primary", () => (
    <Button label="Large Primary Button" type="primary" large />
  ))
  .add("Large Danger", () => (
    <Button label="Large Danger Button" type="danger" large />
  ))
  .add("LOLO", () => <Button label="lol" type="lol" />);
//   LOLO IS THE BUTTON NAME OF THE BUTTON
//   LABEL IS THE TEXT INSIDE OF THE BUTTON 
//   TYPE IS NAME OF THE CSS STYLING