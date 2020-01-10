import React from "react";
import "./Button.css";

const Button = props => {
  let { content, image } = props;
  let resumeClassName = image === "resume" ? "Button-resume-image" : null;
  return (
    <div className={`button-wrapper ${content}`}>
      <h1 className="Button-name">{content}</h1>
      <img className="Button-image" src={image} alt="oopsy" />
    </div>
  );
};

export default Button;
