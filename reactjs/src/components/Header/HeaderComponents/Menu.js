import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "../../../css/header-and-body.css";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
import TemplateProfileImage from "./templateProfileImage.svg"
import DropDownMenu from "../../DropDownMenu/DropDownMenu"
import {useHistory} from "react-router-dom";

function Menu() {

    const [email, setEmail] = useState([]);
    const history = useHistory();

    const fetchUserEmail = () => {
        if (Cookies.get("Authorization") !== undefined) {
            const token = Cookies.get("Authorization");
            const decodedToken = jwt_decode(token);
            setEmail(decodedToken.sub);
        }
    }

    useEffect(() => {
        fetchUserEmail();
    }, []);

    function toggleDropDownMenu() {
        console.log("profile clicked");
        console.log(document.querySelector(".drop-down-menu").style);
        const dropDownMenuStyle = document.querySelector(".drop-down-menu").style;
        console.log(dropDownMenuStyle);

        if (dropDownMenuStyle.display === "none") {
            dropDownMenuStyle.display = "flex";
        } else {
            dropDownMenuStyle.display = "none";
        }
    }



    if (email.length === 0) {
        return (
            <div className="menu">
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/signup">
                            <button>Sign up</button>
                        </Link>
                    </li>
                    <li>
                        <button id="account-buttons" onClick={() => history.push("/login")}>Sign in</button>
                    </li>
                </ul>
            </div>
        );
    } else if (email.length > 0) {
        return (
            <div className="menu">
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/account">
                            <span>{email}</span>
                        </Link>
                    </li>
                    <img className="header-user-icon" src={TemplateProfileImage} onClick={toggleDropDownMenu}/>
                    <DropDownMenu email={email} />
                </ul>
            </div>
        );
    }


}

export default Menu;