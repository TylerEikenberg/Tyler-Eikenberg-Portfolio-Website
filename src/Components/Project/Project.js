import React from "react";
import "./Project.css";

const Project = props => {
  let { picture } = props;
  let [header, body] = [props.children[0], props.children[1]];

  return (
    <div className="project-body-wrapper">
      <div className="title-wrapper">
        <span></span>
        {header}
        <span></span>
      </div>
      <div
        className="project-image-container"
        style={{ backgroundImage: `url(${picture})` }}
      ></div>
      <div className="content-wrapper">
        <span></span>
        {body} <span></span>
      </div>
    </div>
  );
};

export default Project;
