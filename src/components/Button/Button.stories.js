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
  .add("Primary", () => <Button label="Primary" type="primary" />)
   .add("Success", () => <Button label="Success" type="success" />)
  .add("Danger", () => <Button label="Danger" type="danger" />)
//   .add("Warining", () => <Button label="Warining" type="warning" />)
  .add("Large Primary", () => (
    <Button label="Large Primary Button" type="primary" large />
  ))
  .add("Large Danger", () => <Button label="Large Danger Button" type="danger" large />)
  .add('LOLO', () => <Button label="lol" type="lol"/>)
//   LOLO IS THE BUTTON NAME OF THE BUTTON
//   LABEL IS THE TEXT INSIDE OF THE BUTTON 
//   TYPE IS NAME OF THE CSS STYLING