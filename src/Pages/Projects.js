import React from "react";
// import { Link } from "react-router-dom";
import "./Projects.css";
import Project from "../Components/Project/Project";

function Projects() {
  return (
    <div className="project-page-wrapper">
      <div className="project-page-header">
        <span></span>
        <h1>Projects</h1>
        <span></span>
      </div>
      <div className="project-preamble">
        <span></span>
        <h2>
          Here's a few of my most recent projects. For a closer look be sure to
          check out my <a href="/">GitHub</a>.
        </h2>
        <span></span>
      </div>
      <div className="projects-body">
        <span></span>
        <div className="placeholder-project">
          <Project>
            <h1>CoTripper</h1>
          </Project>
        </div>
        <span></span>
      </div>
    </div>
  );
}

export default Projects;
