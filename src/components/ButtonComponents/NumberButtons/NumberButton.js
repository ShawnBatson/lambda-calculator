import React from "react";
import { numbers } from  '../../../data';

const NumberButton = props => {
  return (
    <>
    <div>
      <button>{props.number}</button>
    </div>
    </>
  );
};

export default NumberButton;