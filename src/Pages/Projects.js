import React from "react";
// import { Link } from "react-router-dom";
import "./Projects.css";
import TylerGif from "../Components/TylerGIF/TylerGIF";
import Tyler from "../Components/Tyler/Tyler";
import Project from "../Components/Project/Project";

import { mdiGithubBox, mdiLinkedinBox, mdiEmailPlus } from "@mdi/js";
import Icon from "@mdi/react";

import glasses from "../Assets/myglasses.png";

function Projects() {
  return (
    <div>
      <div className="ProjectPage-wrapper">
        <div className="nav-bar">
          <div className="tyler-wrapper">
            <Tyler />
          </div>

          <div className="home-icons_projects">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              href="https://github.com/TylerEikenberg"
            >
              <Icon
                className="icon"
                path={mdiGithubBox}
                size={3}
                color="#fff"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              href="https://www.linkedin.com/in/tylereikenberg/"
            >
              <Icon
                className="icon"
                path={mdiLinkedinBox}
                size={3}
                color="#fff"
              />
            </a>
            <a className="icon-link" href="mailto:tylereikenberg8195@gmail.com">
              <Icon
                className="icon"
                path={mdiEmailPlus}
                size={3}
                color="#fff"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="gif-container_projects">
        <span></span>
        <TylerGif />
        <span></span>
      </div>

      <div className="projects-header">
        <span></span>
        <h1>Projects</h1>
        <span></span>
      </div>

      <div className="projects-container">
        <Project picture={glasses}>
          <h1>hello</h1> This project is about glasses
        </Project>
        <Project picture={glasses}>
          <h1>hello</h1> This project is about glasses
        </Project>
        <Project picture={glasses}>
          <h1>hello</h1> This project is about glasses
        </Project>
      </div>
    </div>
  );
}

export default Projects;
