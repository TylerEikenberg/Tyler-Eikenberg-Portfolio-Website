import React from "react";
import "./Button.css";

const Button = props => {
  let { content, image } = props;

  return (
    <div className="Button-wrapper">
      <h1 className="Button-name">{content}</h1>
      <img className={`Button-image ${content}`} src={image} alt="oopsy" />
    </div>
  );
};

export default Button;
