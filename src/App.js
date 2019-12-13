import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Projects from "./Pages/Projects";

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
      </div>
    </div>
    <div className="name-title-container">
      <h1 className="name-header">Tyler Eikenberg</h1>
    </div>

    <div className="right-div"></div>
  </body>
);

export default App;
