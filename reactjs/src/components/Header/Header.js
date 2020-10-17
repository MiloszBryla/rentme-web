import React from "react";

import "../../css/header-and-body.css";
import Menu from "./HeaderComponents/Menu"

function Header() {

    return (
        <div className="header">
            <Menu />
        </div>
    );
}

export default Header;