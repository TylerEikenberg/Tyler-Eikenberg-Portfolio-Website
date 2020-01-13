import React from "react";
import "./About.css";
import "../ProjectsPage/Projects.css";

export default function About() {
  return (
    <div className="About-page-wrapper">
      <h1 className="About-page-title">About Me</h1>
      <div className="About-photo-details-wrapper">
        <div className="About-photo-container"></div>
        <div className="About-page-details">
          <h3 className="About-details-top">
            I'm a web-developer with a penchant for the bold and exciting. I've
            had a life-long passion for tech; learning the ins and outs of
            anything I could get my hands on (and fixing the family computer
            every time my parents opened an email they shouldn't have). I'm
            always eager to learn new technologies and stay ahead of the curve.
          </h3>
          <h3>
            When I'm not busy coding, I'm playing videogames with my wife, or
            hide-and-seek with my two nephews.
          </h3>
        </div>
      </div>
    </div>
  );
}
