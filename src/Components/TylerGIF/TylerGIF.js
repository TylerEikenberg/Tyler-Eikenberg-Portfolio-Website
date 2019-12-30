import React from "react";
import "./TylerGIF.css";
import { Link } from "react-router-dom";

const TylerGIF = props => {
  return (
    <Link to="/" className="tyler-gif-home" href="">
      <div className="tylergif-wrapper"></div>
    </Link>
  );
};

export default TylerGIF;
