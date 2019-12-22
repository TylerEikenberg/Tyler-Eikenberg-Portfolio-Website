import React from "react";
import "./Button.css";

const Button = props => {
  let { content } = props;
  return (
    <div className="button-wrapper">
      <h1>{content}</h1>
    </div>
  );
};

export default Button;
