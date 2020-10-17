import React from "react";
import { Link } from "react-router-dom";
import "../../css/header-and-body.css";
import Menu from "./HeaderComponents/Menu";
import Logo from "./HeaderComponents/Logo";
import SearchBar from "./HeaderComponents/SearchBar";

function HeaderWithLogoAndSearchBar(props) {
  return (
    <div className="header">
        <Logo />
        <Menu />
        <SearchBar SearchPhrasePassedToSearchBar={props.SearchPhrasePassedToHeader}/>
    </div>
  );
}

export default HeaderWithLogoAndSearchBar;