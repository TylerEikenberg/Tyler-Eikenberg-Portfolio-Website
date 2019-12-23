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
        <Project
          picture={glasses}
          github="https://github.com/TylerEikenberg/Studio-Ghibli-Project-Repos"
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            href="https://dazzling-meninsky-24845a.netlify.com/"
          >
            Studio Ghibli Database
          </a>
          As an excercise in building and utilizing API's I created an API of
          data from Studio Ghibli movies with JavaScript, Express, and MongoDB.
          Built with React; this website allows users to create, update, and
          delete their own characters as well as learn about various films from
          Studio Ghibli.
        </Project>
        <Project
          picture={glasses}
          github="https://github.com/TylerEikenberg/DeliCious-Repositorys"
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            href="https://wizardly-bartik-6c114a.netlify.com/"
          >
            DeliCious
          </a>
          Working with a group of 2 other developers, we created an API that
          gathered data from 100 of the best restaurants in Washington, DC, then
          we created a front-end website for viewing these restaurants that
          allows users to leave reviews.
        </Project>
        <Project
          picture={glasses}
          github="https://github.com/TylerEikenberg/Galaxy-Dawg"
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            href="https://tylereikenberg.github.io/Galaxy-Dawg/"
          >
            Galaxy Dawg
          </a>
          Built in about 3 days, the goal of this project was to create a game
          with JavaScript. Galaxy Dawg is a top-down, shoot-em-up game where you
          play as Commander Pup and must prevent the alien forces from reaching
          your home planet.
        </Project>
      </div>
    </div>
  );
}

export default Projects;
