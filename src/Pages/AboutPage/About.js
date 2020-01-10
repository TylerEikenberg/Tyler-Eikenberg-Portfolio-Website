import React from "react";
import "./About.css";
import "../ProjectsPage/Projects.css";
import { TylerGif, Tyler } from "../../Components";
import { mdiGithubBox, mdiLinkedinBox, mdiEmailPlus } from "@mdi/js";
import Icon from "@mdi/react";

export default function About() {
  return (
    <div className="about-page-wrapper">
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
        <h1>About Me</h1>
        <span></span>
      </div>

      <div className="about-me-info">
        <div></div>
        <div className="about-me-details">
          <h3 className="top-details">
            I'm a web-developer with a penchant for the bold and exciting. I've
            had a life-long passion for tech; learning the ins and outs of
            anything I could get my hands on (and fixing the family computer
            every time my parents opened an email they shouldn't have). I'm
            always eager to learn new technologies and stay ahead of the curve.
          </h3>
          <h3>
            When I'm not busy coding, I'm playing videogames with my wife, or
            hide-and-seek with my two nephews.
          </h3>
        </div>
        <div className="photo-container"></div>
        <div></div>
      </div>
    </div>
  );
}
