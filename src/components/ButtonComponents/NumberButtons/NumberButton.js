import React from "react";
import { numbers } from  '../../../data';

const NumberButton = props => {
  return (
    <>
    <div className="number-section" className="col-1">
      <button className="number-button">{props.number}</button>
    </div>
    </>
  );
};

export default NumberButton;