import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Projects from "./Pages/Projects";
import { mdiGithubBox, mdiLinkedinBox, mdiEmailPlus } from "@mdi/js";
import Icon from "@mdi/react";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact component={Projects} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="wrapper">
    <div className="left-div">
      <div className="subname-container">
        <h3>Software Engineer</h3>
        <div className="nav-links">
          <ul>
            <li className="icon-link">
              <a href="https://github.com/TylerEikenberg">
                <Icon path={mdiGithubBox} size={3} color="#4F759B" />
              </a>
            </li>
            <li className="icon-link">
              <a href="https://www.linkedin.com/in/tylereikenberg/">
                <Icon path={mdiLinkedinBox} size={3} color="#4F759B" />
              </a>
            </li>
            <li className="icon-link">
              <a href="https://www.linkedin.com/in/tylereikenberg/">
                <Icon path={mdiEmailPlus} size={3} color="#4F759B" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="name-title-container">
      <h1 className="name-header">Tyler Eikenberg</h1>
    </div>

    <div className="right-div"></div>
  </div>
);

export default App;
