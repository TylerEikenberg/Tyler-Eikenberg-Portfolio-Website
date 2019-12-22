import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Tyler from "./Components/Tyler/Tyler";
import { mdiGithubBox, mdiLinkedinBox, mdiEmailPlus } from "@mdi/js";
import Icon from "@mdi/react";

import Button from "./Components/Button/Button";

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
  <div className="HomePage-wrapper">
    <div className="name-wrapper">
      <Tyler />
      <div className="home-icons">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
          href="https://github.com/TylerEikenberg"
        >
          <Icon className="icon" path={mdiGithubBox} size={2} color="#F3F6FA" />
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
            size={2}
            color="#F3F6FA"
          />
        </a>
        <a className="icon-link" href="mailto:tylereikenberg8195@gmail.com">
          <Icon className="icon" path={mdiEmailPlus} size={2} color="#F3F6FA" />
        </a>
      </div>
    </div>

    <div className="details-box">
      <h1>
        I'm a <span> software engineer / web developer </span> from Baltimore,
        Maryland. I love building web apps and typing really fast.
      </h1>
      <div className="link-container">
        <div className="link-wrapper">
          <Link to="/about">
            <Button content="About" />
          </Link>
        </div>
        <div className="link-wrapper">
          <Link to="/projects">
            <Button content="Projects" />
          </Link>
        </div>
        <div className="link-wrapper">
          <Link to="/resume">
            <Button content="Résumé" />
          </Link>
        </div>
      </div>
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
