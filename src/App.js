import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { AboutPage, ProjectsPage, ResumePage } from "./Pages";
import { mdiGithubBox, mdiLinkedinBox, mdiEmailPlus } from "@mdi/js";
import Icon from "@mdi/react";

import Tyler from "./Components/Tyler/Tyler";
import Button from "./Components/Button/Button";
import TylerGif from "./Components/TylerGIF/TylerGIF";

import { glasses, laptop, resume } from "./Assets/";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <header className="App-header">
          <div className="App-tyler-name-wrapper">
            <Tyler />
          </div>
          <div className="App-gif-container">
            <TylerGif />
          </div>

          <div className="App-home-icons">
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
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact component={ProjectsPage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/resume" exact component={ResumePage} />
        </Switch>
        <div className="App-footer-spacer"></div>
        <footer className="App-footer">
          <div className="App-contact-icons-footer">
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
        </footer>
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="HomePage-wrapper">
    <div className="App-details-box">
      <h1 className="App-quick-about">
        I'm a{" "}
        <span style={{ color: "#edbbb4" }}>
          software engineer / web developer
        </span>{" "}
        from Baltimore, Maryland. I love building web apps and typing really
        fast.
      </h1>
    </div>
    <div className="App-links-wrapper">
      <Link to="/about">
        <Button image={glasses} content="About" />
      </Link>
      <Link to="/projects">
        <Button image={laptop} content="Projects" />
      </Link>
      <Link to="/resume">
        <Button image={resume} content="Résumé" />
      </Link>
    </div>
  </div>
);

export default App;

// <Link to="/">
//             <Card color="pink" size="mobile">
//               <img src={airplane} />
//               <h2>Book a Trip</h2>
//             </Card>
//           </Link>
