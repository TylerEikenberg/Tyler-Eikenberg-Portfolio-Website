import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import { mdiGithubBox, mdiLinkedinBox, mdiEmailPlus } from "@mdi/js";
import Icon from "@mdi/react";

import Tyler from "./Components/Tyler/Tyler";
import Button from "./Components/Button/Button";
import TylerGif from "./Components/TylerGIF/TylerGIF";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/about" exact component={About} />
          <Route path="/resume" exact component={Resume} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="HomePage-wrapper">
    <div className="name-wrapper">
      <div className="greeting">Hi!</div>
      <div className="tyler-wrapper">
        <Tyler />
      </div>

      <div className="home-icons">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
          href="https://github.com/TylerEikenberg"
        >
          <Icon className="icon" path={mdiGithubBox} size={3} color="#fff" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
          href="https://www.linkedin.com/in/tylereikenberg/"
        >
          <Icon className="icon" path={mdiLinkedinBox} size={3} color="#fff" />
        </a>
        <a className="icon-link" href="mailto:tylereikenberg8195@gmail.com">
          <Icon className="icon" path={mdiEmailPlus} size={3} color="#fff" />
        </a>
      </div>
    </div>

    <div className="gif-container">
      <span></span>
      <TylerGif />
      <span></span>
    </div>
    <div className="details-box">
      <div className="details-objects-container">
        <div>
          <h1>
            I'm a <span> software engineer / web developer </span> from
            Baltimore, Maryland. I love building web apps and typing really
            fast.
          </h1>
          <div className="link-container">
            <div className="link-wrapper">
              <Link to="/about">
                <Button image="glasses" content="About" />
              </Link>
            </div>
            <div className="link-wrapper">
              <Link to="/projects">
                <Button image="laptop" content="Projects" />
              </Link>
            </div>
            <div className="link-wrapper">
              <Link to="/resume">
                <Button image="resume" content="Résumé" />
              </Link>
            </div>
          </div>
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
