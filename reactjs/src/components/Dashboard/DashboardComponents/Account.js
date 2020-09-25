import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import "../../../css/header-and-body.css";
import "../../../css/account-settings.css";
import TemplateProfileImage from "./templateProfileImage.svg"

function Account(props){

    const {register, handleSubmit, errors} = useForm();
    const [user, setUser] = useState([]);

    const fetchUserDetails = async () => {
        const response = await fetch(`http://localhost:8080/users/renters/${props.userId}`);
        const user = await response.json();
        setUser(user);
    }

    useEffect(() => {
        fetchUserDetails();
    }, []);

    const onSubmit =  async (data) => {
        const headers = new Headers();
        headers.append('Content-type', 'application/json');
        console.log(data)

        const options = {
            method: 'PUT',
            headers,
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
                    <Link className="bookmark"          to={"/" + "dashboard/" + user.id + "/renting"}>Renting</Link>
                    <Link className="bookmark"          to={"/" + "dashboard/" + user.id + "/lending"}>Lending</Link>
                    <Link className="active-bookmark"   to={"/" + "dashboard/" + user.id + "/account"}>Account</Link>
                </div>
                <div className="dashboard-content-container acc-account">
                    <h7>Account settings</h7>
                    <form className="account-settings-form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="account-settings-section acc-name">
                            <p className="acc-title">Name and Surname</p>

                            <div className="acc-input-container acc-fist-name">
                                <p className="acc-input-label">First name</p>
                                <input className="acc-input" placeholder={user.firstName} name="firstName"
                                       ref={register({required: true, minLength: 3})}/>
                                {errors.firstName && <p className="error-message">Name is too short!</p>}
                            </div>
                            <div className="acc-input-container acc-last-name">
                                <p className="acc-input-label">Last name</p>
                                <input className="acc-input" placeholder={user.lastName} name="lastName"
                                       ref={register({required: true, minLength: 3})}/>
                                {errors.lastName && <p className="error-message">Last name is too short!</p>}
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
                                <input className="acc-input" placeholder={user.address} name="firstName"
                                       ref={register({required: true, minLength: 3})}/>
                                {errors.firstName && <p className="error-message">Address is too short!</p>}
                            </div>
                            <div className="acc-input-container acc-post-code">
                                <p className="acc-input-label">Postal code</p>
                                <input className="acc-input" placeholder={user.postCode} name="postCode"
                                       ref={register({required: true, minLength: 3})}/>
                                {errors.LastName && <p className="error-message">Wrong postal code input!</p>}
                            </div>
                            <div className="acc-input-container acc-city">
                                <p className="acc-input-label">City</p>
                                <input className="acc-input" placeholder={user.city} name="city"
                                       ref={register({required: true, minLength: 3})}/>
                                {errors.LastName && <p className="error-message">City name is too short!</p>}
                            </div>
                        </div>

                        <div className="account-settings-section acc-password">
                            <div>
                                <p className="acc-title">Password</p>
                                <div className="acc-input-container acc-password">
                                    <p className="acc-input-label">New password:</p>
                                    <input className="acc-input" placeholder="" name="password"
                                           ref={register({required: true, minLength: 3})}/>
                                    {errors.LastName && <p className="error-message">Wrong postal code input!</p>}
                                </div>
                                <div className="acc-input-container acc-password-confirmation">
                                    <p className="acc-input-label">Confirm password:</p>
                                    <input className="acc-input" placeholder="" name="password-confirmation"
                                           ref={register({required: true, minLength: 3})}/>
                                    {errors.LastName && <p className="error-message">City name is too short!</p>}
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