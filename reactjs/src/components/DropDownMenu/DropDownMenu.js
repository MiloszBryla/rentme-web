import React from "react";
import "../../css/drop-down-menu.css";
import {Link} from "react-router-dom";
import userImg from "../../assets/user-default-icon.png";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";


function DropDownMenu(props) {

    const history = useHistory();

    function logOut() {
        Cookies.remove("Authorization");
        history.go(0);
    }

    function hideDropDownMenu() {
        document.querySelector(".drop-down-menu").style.display = "none";
    }

    return (
        <div className="drop-down-menu" onLoad={hideDropDownMenu}>
            <div className="drop-down-header">
                <div className="user-image">
                    <img id="profile-icon" alt="user-icon" src={userImg}/>
                </div>
                <div className="drop-down-user-name">{props.email}</div>
            </div>
            <ul>
                <li><Link className="drop-down-link" to="/dashboard/account">My Account</Link></li>
                <li><Link className="drop-down-link" to="/dashboard/lending">My Items</Link></li>
                <li><Link className="drop-down-link" to="/dashboard/renting" >My Reservations</Link></li>
                <li><Link to='/' className="drop-down-link" onClick={logOut}>Log out</Link></li>
            </ul>
        </div>
    );
}

export default DropDownMenu;