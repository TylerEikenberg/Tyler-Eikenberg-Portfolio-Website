import React from "react";
import "./Project.css";

import { mdiGithubBox } from "@mdi/js";
import Icon from "@mdi/react";

const Project = props => {
  let { picture, github } = props;
  let [header, body] = [props.children[0], props.children[1]];

  return (
    <div className="project-body-wrapper">
      <div className="project-header">{header}</div>
      <div
        className="project-picture"
        style={{ backgroundImage: `url(${picture})` }}
      ></div>

      <div className="project-details">{body}</div>

      <div className="github-container">
        <div></div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
          href={github}
        >
          <Icon className="icon" path={mdiGithubBox} size={3} color="#78e3fd" />
        </a>
        <div></div>
      </div>
    </div>
  );
};

export default Project;
