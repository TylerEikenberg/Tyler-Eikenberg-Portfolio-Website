import React from "react";
import "./Button.css";

const Button = props => {
  let { content, image } = props;
  return (
    <div className={`button-wrapper ${image}`}>
      <h1>{content}</h1>
    </div>
  );
};

export default Button;
