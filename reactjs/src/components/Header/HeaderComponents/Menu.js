import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "../../../css/header-and-body.css";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
import TemplateProfileImage from "./templateProfileImage.svg"
import DropDownMenu from "../../DropDownMenu/DropDownMenu"

function Menu() {

    const [email, setEmail] = useState([]);

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
                            <button type="text">Sign up</button>
                        </Link>
                    </li>

                    <li>
                        <button onClick={showLogin}>Sign in</button>
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


    function showLogin() {
        // fadeOut("wrapper", 15)
        document.querySelector(".wrapper").style.display = "none";
        document.querySelector(".popup").style.display = "flex";
        fadeIn("popup", 35)
    }

    function forgotPass() {
        document.getElementById("forg").addEventListener("click", function () {
            document.querySelector(".wrapper").style.opacity = "0";
            document.querySelector(".popup").style.display = "none";
            document.querySelector(".popup2").style.display = "flex";
        })
    }

    function forgotPassHide() {
        document.querySelector(".close2").addEventListener("click", function () {
            document.querySelector(".wrapper").style.display = "flex";
            fadeIn("wrapper", 75)
            document.querySelector(".popup").style.display = "none";
            document.querySelector(".popup2").style.display = "none";

        })
    }

    function fadeOut(element, duration) {
        var i = 10;
        var wrapper = document.getElementsByClassName(element)[0];
        wrapper.style.opacity = 1;
        var k = window.setInterval(function () {
            if (i <= 0) {
                clearInterval(k)
                wrapper.style.opacity = 0;
            } else {
                wrapper.style.opacity = i / 10;
                i--;
            }
        }, duration);
    }

    function fadeIn(element, duration) {
        var i = 0;
        var wrapper = document.getElementsByClassName(element)[0];
        wrapper.style.opacity = 0;
        var k = window.setInterval(function () {
            if (i >= 10) {
                clearInterval(k)
                wrapper.style.opacity = 1;
            } else {
                wrapper.style.opacity = i / 10;
                i++;
            }
        }, duration);
    }

}

export default Menu;