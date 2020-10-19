import React, {useRef, useState} from "react";
import {useForm} from "react-hook-form";
import "../../css/header-and-body.css";
import "../../css/sign-up.css";
import Login from "../Login/Login";
import HeaderWithLogo from "../Header/HeaderWithLogo";
import {useHistory} from "react-router-dom";

import TemplateProfileImage from "./templateProfileImage.svg"

function SignUp() {
    const {register, handleSubmit, errors, getValues} = useForm();
    const history = useHistory();
    const [error, setError] = useState([]);

    const onSubmit = async (data) => {
        const headers = new Headers();
        headers.append('Content-type', 'application/json');
        getCoordinates(data)
        data.enabled = 1;
        data.role = "USER";
        data.isAdmin = false;
        console.log(data)
        const request = new Request('http://localhost:8080/users',
            {
                method: 'POST',
                headers,
                body: JSON.stringify(data)
            });
        const response = await fetch(request).then((response => {
            if (response.status === 200) {
                history.go(0)
            } else {
                setError("Email is already taken!");
            }
        }));
    }


    function getCoordinates(data) {
        let apiUrl = "https://api.opencagedata.com/geocode/v1/json?q=Slusarska%2C%20Krakow&key=62619016a8b448b290c76150ccc9893d&language=pl&pretty=1";
        fetch(apiUrl)
            .then(response => response.json())
            .then(response => {
                data.lat = response.results[0].geometry.lat;
                data.lng = response.results[0].geometry.lng;
            })
    }

    return (
        <React.Fragment>
            <HeaderWithLogo/>
            <Login/>
            <div className="wrapper">
                <div className="sign-up-container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form">
                            <div className="title-text">
                                <h3 className="sign-up-h2">Sign up</h3>
                                <h4 className="">It's quick and easy!</h4>
                            </div>
                            <form className="account-settings-form" onSubmit={handleSubmit(onSubmit)}>

                                <input name="id" ref={register()} style={{display: "none"}}/>

                                <div className="account-settings-section acc-name">
                                    <p className="acc-title">Name and E-mail</p>

                                    <div className="acc-input-container acc-fist-name">
                                        <p className="acc-input-label">First name</p>
                                        <input className="acc-input" name="firstName"
                                              ref={register({required: "First name is required"})}/>
                                        {errors.name && <p><b>{errors.name.message}</b></p>}
                                    </div>
                                    <div className="acc-input-container acc-last-name">
                                        <p className="acc-input-label">Last name</p>
                                        <input className="acc-input" name="lastName"
                                               ref={register()}/>
                                        {errors.last_name && <p><b>{errors.last_name.message}</b></p>}
                                    </div>
                                    <div className="acc-input-container acc-email">
                                        <p className="acc-input-label">E-mail</p>
                                        <input className="acc-input" name="email"
                                            ref={register({
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "invalid email address"
                                                }
                                        })}/>
                                        {error.email && <p><b>{error.email.message}</b></p>}
                                        <div className="error-email">{error}</div>
                                    </div>
                                </div>
                                <div className="account-settings-section acc-img">
                                    <img src={TemplateProfileImage}/>
                                    <button className="acc-button upload">Upload</button>
                                </div>

                                <div className="account-settings-section acc-address">
                                    <p className="acc-title">Address</p>

                                    <div className="acc-input-container acc-address">
                                        <p className="acc-input-label">Street and number</p>
                                        <input className="acc-input" name="address"
                                               ref={register()}/>
                                        {errors.street && <p><b>{errors.street.message}</b></p>}
                                    </div>
                                    <div className="acc-input-container acc-post-code">
                                        <p className="acc-input-label">Postal code</p>
                                        <input className="acc-input" name="postCode"
                                               ref={register()}/>
                                        {errors.postal_code && <p><b>{errors.postal_code.message}</b></p>}
                                    </div>
                                    <div className="acc-input-container acc-city">
                                        <p className="acc-input-label">City</p>
                                        <input className="acc-input" name="city"
                                               ref={register()}/>
                                        {errors.city && <p className="error-message">City name is too short!</p>}
                                    </div>
                                </div>

                                <div className="account-settings-section acc-password">
                                    <div>
                                        <p className="acc-title">Password</p>
                                        <div className="acc-input-container acc-password">
                                            <p className="acc-input-label">Password:</p>
                                            <input className="acc-input" type="password"
                                                   name="password"
                                       ref={register({
                                           required: "password is required",
                                                minLength: {
                                                    value: 8,
                                                    message: "password is too short - 8 characters required"
                                                 },
                                            })}/>
                                            {errors.password && <p><b>{errors.password.message}</b></p>}
                                        </div>
                                        <div className="acc-input-container acc-password-confirmation">
                                            <p className="acc-input-label">Repeat password:</p>
                                            <input className="acc-input" type="password" name="passwordConfirmation"
                                                   ref={register()}/>
                                            {errors.passwordConfirmation &&
                                            <p className="error-message">Password inputs do not match</p>}
                                        </div>
                                    </div>
                                </div>
                                <button className="acc-button acc-save-changes"
                                 type="submit"
                                 onClick={handleSubmit(onSubmit)}>
                                    Submit
                                 </button>
                                 <div className="warning-message hidden">
                                          <p>All fields are required</p>
                                 </div>
                            </form>
                        </div>
                        <h6 className="text-agreement">
                            By Clicking "Submit", you agree to our <a href="#">Terms</a> and that you have
                            read our <a href="#"> Data Policy</a>.
                        </h6>
                    </form>
                </div>
            </div>
        </React.Fragment>

    );
}

export default SignUp;