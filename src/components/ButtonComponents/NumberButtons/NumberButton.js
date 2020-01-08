import React from "react";
import { numbers } from  '../../../data';

const NumberButton = props => {
  return (
      <button>{props.number}</button>
  );
};

export default NumberButton;