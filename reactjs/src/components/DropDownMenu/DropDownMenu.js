import React from "react";
import "../../css/drop-down-menu.css";
import {Link} from "react-router-dom";
import userImg from "../../assets/user-default-icon.png";

function DropDownMenu() {

    return (
        <div className="drop-down-menu">
            <div className="drop-down-header">
                <div className="user-image">
                    <img id="logo" alt="user-icon" src={userImg}/>
                </div>
                <div className="user-name">Jan Nowak</div>
            </div>
            <ul>
                <li><Link to='account'>My Account</Link></li>
                <li><Link to='items'>My Items</Link></li>
                <li><Link to='reservations'>My Reservations</Link></li>
                <li><Link to='logout'>Log out</Link></li>
            </ul>
        </div>
    );
}

export default DropDownMenu;