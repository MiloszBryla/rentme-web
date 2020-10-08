import React, {useState} from "react";
import "../../css/header-and-body.css";
import closeIcon from "../../assets/close-window.svg"
import RecoverAcc from "../RecoverAcc/RecoverAcc";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";


function Login() {
    const history = useHistory();
    const [error, setError] = useState([]);

    const authoriseUser = async (data) => {
        await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(data),
        }).then((response) => {
            if(response.status === 200){
                history.go(0);
            } else{
                setError("Wrong email/password, try again!");
            }
        })
    }

    const {register, handleSubmit, errors} = useForm();

    const onSubmit = (data) => {
        authoriseUser(data);
    };

    function hideLogin() {
        document.querySelector(".wrapper").style.display = "flex";
        document.querySelector(".wrapper").style.justifyContent = "center";
        fadeIn("wrapper", 75)
        document.querySelector(".popup").style.display = "none";
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

    function forgotPass() {
        document.querySelector(".wrapper").style.opacity = "0";
        document.querySelector(".popup").style.display = "none";
        document.querySelector(".popup2").style.display = "flex";
    }


    return (
        <React.Fragment>
            <RecoverAcc/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="popup">
                    <div className="popup-content">
                        <p className="popup-title sign-in">Sign in</p>
                        <img className="close" src={closeIcon} onClick={hideLogin} alt={"close-icon"}/>
                        <div className="error-login">{error}</div>
                        <p className="input-label email">E-mail:</p>
                        <div className="login-data-input-decoration-wrapper">
                            <input className="login-data-input" type="text" placeholder="" name="email" ref={register({
                                required: "Required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "invalid email address"
                                }
                            })}/>
                        </div>
                        {errors.email &&
                        <p className="login-validator-message">You need to enter valid email address.</p>}
                        <p className="input-label">Password:</p>
                        <div className="login-data-input-decoration-wrapper">
                            <input className="login-data-input" type="password" placeholder="" name="password"
                                   ref={register}/>
                        </div>
                        <button className="recoveryPassBtn" onClick={forgotPass}>Forgot your password?</button>
                        <div className="login-button-gradient-wrapper">
                            <button className="loginRecBtn">Login</button>
                        </div>
                    </div>
                </div>
            </form>
        </React.Fragment>
    );
}

export default Login;
