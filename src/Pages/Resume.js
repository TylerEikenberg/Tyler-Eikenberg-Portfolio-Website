import React from "react";
import "./Resume.css";

export default function Resume() {
  return (
    <div className="resume-container">
      <div></div>
      <iframe
        className="myresume"
        title="myresume"
        src="https://docs.google.com/document/d/e/2PACX-1vSRdIG0h4cVQnRde5NErLB8yFFSZNoaqzMcNUcoxH_krOLrICVZdPCVg-jjto1YmfoYultV2dWJzxt7/pub?embedded=true"
      ></iframe>
      <div></div>
    </div>
  );
}
