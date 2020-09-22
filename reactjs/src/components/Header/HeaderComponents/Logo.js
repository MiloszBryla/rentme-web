import React from "react";
import { Link } from "react-router-dom";
import "../../../css/header-and-body.css";
import logoImg from "../../../assets/logo.svg";

function Logo() {
  return (
      <Link to="">
        <img id="logo" src={logoImg}></img>
      </Link>
  );
}

export default Logo;