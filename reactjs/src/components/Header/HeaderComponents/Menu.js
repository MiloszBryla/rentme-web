import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "../../../css/header-and-body.css";
import Cookies from "js-cookie";
import jwt_decode from 'jwt-decode';

function Menu() {

    const [email, setEmail] = useState([]);
    const [user, setUser] = useState([]);

    const fetchUserDetails = async (email) => {
        console.log("email from fetchUserDetails:")
        console.log(email)
    }

    useEffect(() => {
        const token = Cookies.get("Authorization");
        if (token != null){
            const decoded = jwt_decode(token);
            fetchUserDetails(decoded.sub);
        }
    }, []);

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