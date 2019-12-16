import React from "react";
import "./Project.css";

const Project = props => {
  return (
    <div className="title-wrapper">
      <span></span>
      {props.children} <span></span>
    </div>
  );
};

export default Project;
