import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Projects from "./Pages/Projects";

function App() {
  return (
    <Router>
      <body className="wrapper">
        <Route path="/" component={Home} />
        <Route path="/projects" component={Projects} />
      </body>
    </Router>
  );
}

const Home = () => (
  <body className="wrapper">
    <div className="left-div"></div>
    <div className="name-title-container">
      <h1 className="name-header">Tyler Eikenberg</h1>
      <div className="subname-container">
        <h3>Software Engineer</h3>
      </div>
      <i class="fab fa-github-square"></i>
    </div>

    <div className="right-div"></div>
  </body>
);

export default App;
