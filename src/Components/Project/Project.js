import React from "react";
import "./Project.css";

const Project = props => {
  let { picture } = props;
  let [header, body] = [props.children[0], props.children[1]];

  return (
    <div className="project-body-wrapper">
      <div className="project-header">{header}</div>
      <div
        className="project-picture"
        style={{ backgroundImage: `url(${picture})` }}
      ></div>

      <div className="project-details">{body}</div>
    </div>
  );
};

export default Project;
