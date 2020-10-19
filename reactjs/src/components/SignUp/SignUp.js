import React, {useRef, useState} from "react";
import {useForm, Controller} from "react-hook-form";
import "../../css/header-and-body.css";
import "../../css/sign-up.css";
import Login from "../Login/Login";
import HeaderWithLogo from "../Header/HeaderWithLogo";
import { useHistory } from "react-router-dom";
import TemplateProfileImage from "./templateProfileImage.svg"

function SignUp() {
    const {register, handleSubmit, errors, watch} = useForm();
    const history = useHistory();
    const [error, setError] = useState("");
    const password = useRef({});
    password.current = watch('password');

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
            if (response.status === 201) {
                authoriseUser(data);
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
                history.push("/index");
            }
            else{
                history.go(0);
            }
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
                                               ref={register({required: true, minLength: 3})}/>
                                        {errors.firstName
                                        && errors.firstName.type === "required"
                                        && <p className="error-message">This field is required</p>}
                                        {errors.firstName
                                        && errors.firstName.type === "minLength"
                                        && <p className="error-message">Minimum 3 characters required</p>}
                                    </div>

                                    <div className="acc-input-container acc-last-name">
                                        <p className="acc-input-label">Last name</p>
                                        <input
                                            className="acc-input"
                                            name="lastName"
                                            ref={register({required: true, minLength: 3})}
                                        />
                                        {errors.lastName
                                        && errors.lastName.type === "required"
                                        && <p className="error-message">This field is required</p>}
                                        {errors.lastName
                                        && errors.lastName.type === "minLength"
                                        && <p className="error-message">Minimum 3 characters required</p>}
                                    </div>

                                    <div className="acc-input-container acc-email">
                                        <p className="acc-input-label">E-mail</p>
                                        <input className="acc-input" name="email"
                                               ref={register({
                                                   required: true,
                                                   pattern: {
                                                       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                       message: "invalid email address"
                                                   }
                                               })}
                                        />
                                        {errors.email
                                        && errors.email.type === "required"
                                        && <p className="error-message">This field is required</p>}
                                        {errors.email
                                        && errors.email.type === "pattern"
                                        && <p className="error-message">Incorrect email format</p>}
                                        <div className="error-message">{error}</div>
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
                                               ref={register({
                                                   required: true,
                                                   minLength: 3
                                               })}/>
                                        {errors.address
                                        && errors.address.type === "required"
                                        && <p className="error-message">This field is required</p>}
                                        {errors.address
                                        && errors.address.type === "minLength"
                                        && <p className="error-message">Minimum 3 characters required</p>}
                                    </div>
                                    <div className="acc-input-container acc-post-code">
                                        <p className="acc-input-label">Postal code</p>
                                        <input className="acc-input" name="postCode"
                                               ref={register({
                                                   required: true,
                                                   minLength: 3
                                               })}/>
                                        {errors.lastName
                                        && errors.postCode.type === "required"
                                        && <p className="error-message">This field is required</p>}
                                        {errors.postCode
                                        && errors.postCode.type === "minLength"}
                                    </div>

                                    <div className="acc-input-container acc-city">
                                        <p className="acc-input-label">City</p>
                                        <input className="acc-input" name="city"
                                               ref={register({
                                                   required: true,
                                                   minLength: 3
                                               })}/>
                                        {errors.city
                                        && errors.city.type === "required"
                                        && <p className="error-message">This field is required</p>}
                                        {errors.city
                                        && errors.city.type === "minLength"}
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
                                            {errors.password
                                            && errors.password.type === "required"
                                            && <p className="error-message">This field is required</p>}
                                            {errors.password
                                            && errors.password.type === "minLength"
                                            && <p className="error-message">Password must have minimum length 8</p>}
                                        </div>

                                        <div className="acc-input-container acc-password-confirmation">
                                            <p className="acc-input-label">Repeat password:</p>
                                            <input
                                                className="acc-input"
                                                name="passwordConfirmation"
                                                type="password"
                                                ref={register({
                                                    validate: value =>
                                                        value === password.current || "The passwords do not match"
                                                })}
                                            />
                                            {errors.passwordConfirmation && <p className="error-message">{errors.passwordConfirmation.message}</p>}

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