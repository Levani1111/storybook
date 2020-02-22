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
  //----------------------------------------------------------------------------------
  .add("primary", () => <Button label="primary" type="primary" />)
  .add("primary large", () => <Button label="primary" type="primary" large />)
  .add("primary border", () => <Button label="primary" type="primary" border />)
  .add("primary border large", () => (
    <Button label="primary" type="primary" border large />
  ))
  .add("primary  pale", () => <Button label="primary" type="primary" pale />)
  .add("primary pale  large", () => (
    <Button label="primary" type="primary" pale large />
  ))
  // ---------------------------------------------------------------------------------------------
  .add("Danger", () => <Button label="Danger" type="Danger" />)
  .add("Danger large", () => <Button label="Danger" type="Danger" large />)
  .add("Danger border", () => <Button label="Danger" type="Danger" border />)
  .add("Danger border large", () => (
    <Button label="Danger" type="Danger" border large />
  ))
  .add("Danger  pale", () => <Button label="Danger" type="Danger" pale />)
  .add("Danger pale  large", () => (
    <Button label="Danger" type="Danger" pale large />
  ))
  // ---------------------------------------------------------------------------------------------
  .add("warning", () => <Button label="warning" type="warning" />)
  .add("warning large", () => <Button label="warning" type="warning" large />)
  .add("warning border", () => <Button label="warning" type="warning" border />)
  .add("warning border large", () => (
    <Button label="warning" type="warning" border large />
  ))
  .add("warning  pale", () => <Button label="warning" type="warning" pale />)
  .add("warning pale  large", () => (
    <Button label="warning" type="warning" pale large />
  ))
  // ---------------------------------------------------------------------------------------------
  .add("Success", () => <Button label="Success" type="success" />)
  .add("Success large", () => <Button label="Success" type="success" large />)
  .add("Success border", () => <Button label="Success" type="success" border />)
  .add("Success border large", () => (
    <Button label="Success" type="success" border large />
  ))
  .add("Success  pale", () => <Button label="Success" type="success" pale />)
  .add("Success pale  large", () => (
    <Button label="Success" type="success" pale large />
  ))
  // ------------------------------------------------------------------------------------------
  .add("Default", () => <Button label="Default" type="Default" />)
  .add("Default large", () => <Button label="Default" type="Default" large />)
  .add("Default border", () => <Button label="Default" type="Default" border />)
  .add("Default border large", () => (
    <Button label="Success" type="success" border large />
  ))
  .add("Default  pale", () => <Button label="Default" type="Default" pale />)
  .add("Default pale  large", () => (
    <Button label="Default" type="Default" pale large />
  ));
  //---------------------------------------------------------------------------------------------
  //   .add("Warining", () => <Button label="Warining" type="warning" />)
  //.add("Large Primary", () => (
  // <Button label="Large Primary Button" type="primary" large />
  //))
  //.add("Large Danger", () => (
    //<Button label="Large Danger Button" type="danger" large />
  //));
  //.add("LOLO", () => <Button label="lol" type="lol" />);
//   LOLO IS THE BUTTON NAME OF THE BUTTON
//   LABEL IS THE TEXT INSIDE OF THE BUTTON 
//   TYPE IS NAME OF THE CSS STYLING