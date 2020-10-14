import React, {useState} from 'react';

import "../../css/header-and-body.css";
import closeIcon from "../../assets/close-window.svg";
import "../../css/header-and-body.css";
import RecoverAcc from "../RecoverAcc/RecoverAcc";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import RouteAuth from "../RouteProtection/RouteAuth";

function LoginPage() {

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
                console.log(response)
                RouteAuth.login();
                history.goBack();
            } else{
                setError("Wrong email/password, try again!");
            }
        })
    }

    const {register, handleSubmit, errors} = useForm();

    const onSubmit = (data) => {
        authoriseUser(data);
    };

    return (
        <div className={"wrapper"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="popup" style={{"display": "flex", "opacity": "1"}}>
                    <div className="popup-content">
                        <p className="popup-title sign-in">Sign in</p>
                        <img className="close" src={closeIcon} onClick={() => history.goBack()} alt={"close-icon"}/>
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
                        <a className="recoveryPassBtn" onClick={() => history.push("/recovery")}>Forgot your password?</a>
                        <div className="login-button-gradient-wrapper">
                            <button className="loginRecBtn">Login</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;