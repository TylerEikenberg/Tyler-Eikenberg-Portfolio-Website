import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Tyler from "./Components/Tyler/Tyler";
import { mdiGithubBox, mdiLinkedinBox, mdiEmailPlus } from "@mdi/js";
import Icon from "@mdi/react";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/about" exact component={About} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="wrapper">
    <div className="left-div">
      <div className="name-wrapper"></div>
      <div className="subname-container">
        <Tyler />
        <h3>Software Engineer</h3>
        <div className="nav-links">
          <ul>
            <li className="icon-link">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/TylerEikenberg"
              >
                <Icon path={mdiGithubBox} size={3} color="#4F759B" />
              </a>
            </li>
            <li className="icon-link">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/tylereikenberg/"
              >
                <Icon path={mdiLinkedinBox} size={3} color="#4F759B" />
              </a>
            </li>
            <li className="icon-link">
              <a href="mailto:tylereikenberg8195@gmail.com">
                <Icon path={mdiEmailPlus} size={3} color="#4F759B" />
              </a>
            </li>
          </ul>
        </div>
        <div className="page-links-wrapper">
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/document/d/1GHKkXBiTof8mh5EFVV26xopONd8HieW4HYavqMud8Ng/edit?usp=sharing"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
    <div className="name-title-container"></div>

    <div className="right-div"></div>
  </div>
);

export default App;
