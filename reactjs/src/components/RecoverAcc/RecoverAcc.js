import React from "react";
import {Link} from "react-router-dom";
import "../../css/header-and-body.css";
import closeIcon from "../../assets/close-window.svg"
import {useForm} from "react-hook-form";

function forgotPassHide() {
    document.querySelector(".wrapper").style.display = "flex";
    fadeIn("wrapper", 75)
    document.querySelector(".popup").style.display = "none";
    document.querySelector(".popup2").style.display = "none";
}

function fadeIn(element, duration) {
    let i = 0;
    let wrapper = document.getElementsByClassName(element)[0];
    wrapper.style.opacity = 0;
    let k = window.setInterval(function () {
        if (i >= 10) {
            clearInterval(k)
            wrapper.style.opacity = 1;
        } else {
            wrapper.style.opacity = i / 10;
            i++;
        }
    }, duration);
}

function RecoverAcc() {

    const {register, handleSubmit, errors} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="popup2">
                <div className="popup-content2">
                    <p className="popup-title">Password Recovery</p>
                    <img className="close2" onClick={forgotPassHide} src={closeIcon}/>
                    <p>If you have forgotten your account password please enter your e-mail. 
                        We will send you password recovery link.</p>
                    <p className="input-label">E-mail:</p>
                    <div className="login-data-input-decoration-wrapper">
                        <input className="login-data-input" type="text" placeholder="" name="email"
                            ref={register({
                                required: "Required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "invalid email address"
                                }
                            })}/>
                    </div>
                    {errors.email && <p className="login-validator-message">You need to enter valid email address.</p>}
                    <div className="login-button-gradient-wrapper rec">
                        <button className="loginRecBtn rec"> Send</button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default RecoverAcc;