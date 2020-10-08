import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import "../../../css/header-and-body.css";
import "../../../css/account-settings.css";
import TemplateProfileImage from "./templateProfileImage.svg"

function Account(props) {

    const {register, handleSubmit, errors} = useForm();
    const [user, setUser] = useState([]);

    const fetchUserDetails = async () => {
        const response = await fetch(`http://localhost:8080/users/renters/${props.userId}`, {
            method: 'GET',
            credentials: 'include',
        })
        const user = await response.json();
        setUser(user);
    }

    useEffect(() => {
        fetchUserDetails();
    }, []);

    const onSubmit = async (data) => {
        const headers = new Headers();
        headers.append('Content-type', 'application/json');
        console.log(data)

        const options = {
            method: 'PUT',
            headers,
            credentials: 'include',
            body: JSON.stringify(data)
        }

        const request = new Request('http://localhost:8080/users', options);
        const response = await fetch(request);
        const status = await response.status;
    }

    return (
        <div>
            <div className="dashboard">
                <div className="dashboard-header">
                    <Link className="bookmark" to={"/" + "dashboard/" + user.id + "/renting"}>Renting</Link>
                    <Link className="bookmark" to={"/" + "dashboard/" + user.id + "/lending"}>Lending</Link>
                    <Link className="active-bookmark" to={"/" + "dashboard/" + user.id + "/account"}>Account</Link>
                </div>
                <div className="dashboard-content-container acc-account">
                    <h7>Account settings</h7>
                    <form className="account-settings-form" onSubmit={handleSubmit(onSubmit)}>

                        <input name="id" value={user.id} ref={register()} style={{display: "none"}}/>

                        <div className="account-settings-section acc-name">
                            <p className="acc-title">Name and E-mail</p>

                            <div className="acc-input-container acc-fist-name">
                                <p className="acc-input-label">First name</p>
                                <input className="acc-input" name="firstName" defaultValue={user.firstName}
                                       ref={register()}/>
                                {errors.firstName && <p className="error-message">Name is too short!</p>}
                            </div>
                            <div className="acc-input-container acc-last-name">
                                <p className="acc-input-label">Last name</p>
                                <input className="acc-input" defaultValue={user.lastName} name="lastName"
                                       ref={register()}/>
                                {errors.lastName && <p className="error-message">Last name is too short!</p>}
                            </div>
                            <div className="acc-input-container acc-email">
                                <p className="acc-input-label">E-mail</p>
                                <input className="acc-input" defaultValue={user.email} name="email"
                                       ref={register()}/>
                                {errors.email && <p className="error-message">E-mail is too short!</p>}
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
                                <input className="acc-input" defaultValue={user.address} name="address"
                                       ref={register()}/>
                                {errors.address && <p className="error-message">Address is too short!</p>}
                            </div>
                            <div className="acc-input-container acc-post-code">
                                <p className="acc-input-label">Postal code</p>
                                <input className="acc-input" defaultValue={user.postCode} name="postCode"
                                       ref={register()}/>
                                {errors.postCode && <p className="error-message">Incorrect postal code input!</p>}
                            </div>
                            <div className="acc-input-container acc-city">
                                <p className="acc-input-label">City</p>
                                <input className="acc-input" defaultValue={user.city} name="city"
                                       ref={register()}/>
                                {errors.city && <p className="error-message">City name is too short!</p>}
                            </div>
                        </div>

                        <div className="account-settings-section acc-password">
                            <div>
                                <p className="acc-title">Password</p>
                                <div className="acc-input-container acc-password">
                                    <p className="acc-input-label">Password:</p>
                                    <input className="acc-input" type="password" defaultValue={user.city}
                                           name="password"
                                           ref={register()}/>
                                    {errors.password && <p className="error-message">Wrong postal code input!</p>}
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
                        <button className="acc-button acc-save-changes">Save changes</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Account;