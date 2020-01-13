import React from "react";
import "./Projects.css";
import { Project } from "../../Components/";
import { totoro, burger, dog } from "../../Assets/";

function Projects() {
  return (
    <div className="Projects-page-wrapper">
      <h1 className="Projects-page-title">Projects</h1>

      <div className="Projects-container">
        <Project
          picture={totoro}
          github="https://github.com/TylerEikenberg/GitHub-User-Search"
          deployed="https://github-users-te.netlify.com/"
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            href="https://github-users-te.netlify.com/"
          >
            GitHub User Search
          </a>
          Built with React, this project was an excercise in state management
          using Redux. This web app allows you to search for users on GitHub and
          displays an Instagram style profile for each user.
        </Project>
        <Project
          picture={totoro}
          github="https://github.com/TylerEikenberg/Studio-Ghibli-Project-Repos"
          deployed="https://studio-ghibli-movie-database.netlify.com/"
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            href="https://studio-ghibli-movie-database.netlify.com/"
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
          picture={burger}
          github="https://github.com/TylerEikenberg/DeliCious-Repositorys"
          deployed="https://wizardly-bartik-6c114a.netlify.com/"
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
          we created a front-end website for viewing these restaurants with
          React. The website allows users to search through 100 different
          restaurants and leave their own reviews.
        </Project>
        <Project
          picture={dog}
          github="https://github.com/TylerEikenberg/Galaxy-Dawg"
          deployed="https://tylereikenberg.github.io/Galaxy-Dawg/"
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

      <a
        target="_blank"
        rel="noopener noreferrer"
        className="Projects-link-styles"
        href="https://github.com/TylerEikenberg"
      >
        View more of my work GitHub!
      </a>
    </div>
  );
}

export default Projects;
