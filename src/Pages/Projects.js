import React from "react";
// import { Link } from "react-router-dom";
import "./Projects.css";
import Project from "../Components/Project/Project";
import placeholder from "../Assets/cotripper-ph.png";
import delicious from "../Assets/delicious.jpg";
import gdawg from "../Assets/gdawg.jpg";

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
          Here's a few of my most recent projects. For a closer look and to see
          more of my work be sure to check out my <a href="/">GitHub</a>.
        </h2>
        <span></span>
      </div>

      <div className="projects-body">
        <span></span>
        <div className="placeholder-project">
          <Project picture={placeholder}>
            <h1>CoTripper</h1>
            <h2>
              Built with React, Python, and Django. As part of a team of 25
              other developers, I helped create a prototype for CoTripper, an
              application for mothers to get together and plan trips for
              themselves and their kids. I learned so much from this project,
              and I loved working with a team.{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/CotripperPlatform/CoTrip"
              >
                Take a look at the repo on GitHub.
              </a>
            </h2>
          </Project>
        </div>
        <span></span>
      </div>

      <div className="projects-body">
        <span></span>
        <div className="placeholder-project">
          <Project picture={delicious}>
            <h1>DeliCious</h1>
            <h2>
              Built with React, MongoDB, and Express; DeliCious is a web
              application for finding the best restaurants in the Washington,
              D.C. area. Users can search through the 100 best restaurants in DC
              and leave reviews for their favorites. {""}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://wizardly-bartik-6c114a.netlify.com/"
              >
                Check out the site here!
              </a>{" "}
              {""} And feel free to look through the{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/tully4school/Project8FE"
              >
                front-end
              </a>{" "}
              and{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/TylerEikenberg/Yelp-DC-Database"
              >
                back-end
              </a>{" "}
              repos on GitHub.
            </h2>
          </Project>
        </div>
        <span></span>
      </div>

      <div className="projects-body">
        <span></span>
        <div className="placeholder-project">
          <Project picture={gdawg}>
            <h1>Galaxy Dawg</h1>
            <h2>
              Galaxy Dawg is a game I made in a few days using JavaScript and
              Phaser JS. This was a lot of fun to work on and I learned a lot
              while making it (mostly that designing games is really hard!).{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://tylereikenberg.github.io/Galaxy-Dawg/"
              >
                Play it here!
              </a>{" "}
              And check out the repo{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/TylerEikenberg/Galaxy-Dawg"
              >
                here on GitHub
              </a>
              .
            </h2>
          </Project>
        </div>
        <span></span>
      </div>
    </div>
  );
}

export default Projects;
