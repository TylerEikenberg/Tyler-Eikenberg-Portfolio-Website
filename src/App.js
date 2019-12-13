import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Projects from "./Pages/Projects";
import { mdiGithubBox } from "@mdi/js";
import { mdiLinkedinBox } from "@mdi/js";
import Icon from "@mdi/react";

function App() {
  return (
    <Router>
      <body className="wrapper">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact component={Projects} />
        </Switch>
      </body>
    </Router>
  );
}

const Home = () => (
  <body className="wrapper">
    <div className="left-div">
      <div className="subname-container">
        <h3>Software Engineer</h3>
        <div className="nav-links">
          <ul>
            <li>
              <a href="https://github.com/TylerEikenberg">
                <Icon path={mdiGithubBox} size={3} color="#4F759B" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/tylereikenberg/">
                <Icon path={mdiLinkedinBox} size={3} color="#4F759B" />
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
  </body>
);

export default App;
