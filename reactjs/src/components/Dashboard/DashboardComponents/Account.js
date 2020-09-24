import React from 'react';
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import "../../../css/header-and-body.css";
import "../../../css/account-settings.css";
import TemplateProfileImage from "./templateProfileImage.svg"

function Account(){

    const {register, errors} = useForm();

    return (
        <div>
            <div className="dashboard">
                <div className="dashboard-header">
                    <Link className="bookmark"          to={"/" + "dashboard/" + "3" + "/renting"}>Renting</Link>
                    <Link className="bookmark"          to={"/" + "dashboard/" + "3" + "/lending"}>Lending</Link>
                    <Link className="active-bookmark"   to={"/" + "dashboard/" + "3" + "/account"}>Account</Link>
                </div>
                <div className="dashboard-content-container">
                    <form>
                        <div className="account-settings-header">
                            <h7>Account Settings</h7>
                            <button className="account-settings-button save">Save</button>
                        </div>
                        <div className="account-settings-profile-image">
                            <img src={TemplateProfileImage}/>
                            <button className="account-settings-button upload">Upload</button>
                        </div>
                        <div className="account-settings-personal-details">
                            <div className="input-container fist-name">
                                <input className="account-settings-input fist-name" placeholder="Name" name="firstName"
                                    ref={register({required: true, minLength: 3})}/>
                                {errors.firstName && <p className="error-message">Name is too short!</p>}
                            </div>
                            <div className="input-container lastName">
                                <input className="account-settings-input last-name" placeholder="Surname" name="lastName"
                                    ref={register({required: true, minLength: 3})}/>
                                {errors.lastName && <p className="error-message">Surname is too short!</p>}
                            </div>
                        </div>
                        <div className="account-settings-user-localization">
                            <div className="input-container address">
                                <input className="account-settings-input address" placeholder="Address" name="address"
                                    ref={register({required: true, minLength: 3})}/>
                                {errors.address && <p className="error-message">Address is too short!</p>}
                            </div>
                            <div className="input-container postal-code">
                                <input className="account-settings-input postal-code" placeholder="Postal-code" name="postCode"
                                    ref={register({required: true, minLength: 3})}/>
                                {errors.postCode && <p className="error-message">Postal code is too short!</p>}
                            </div>
                            <div className="input-container city">
                                <input className="account-settings-input city" placeholder="City" name="city"
                                    ref={register({required: true, minLength: 3})}/>
                                {errors.city && <p className="error-message">City name is too short!</p>}
                            </div>
                        </div>
                        <div className="account-settings-user-password">
                            <div className="input-container new-password">
                                <input className="account-settings-input new-password" placeholder="New Password" name="password"
                                    ref={register({required: true, minLength: 3})}/>
                                {errors.password && <p className="error-message">Address is too short!</p>}
                            </div>
                            <div className="input-container confirm-password">
                                <input className="account-settings-input confirm-password" placeholder="Confirm Password" name="confirmPassword"
                                    ref={register({required: true, minLength: 3})}/>
                                {errors.confirmPassword && <p className="error-message">Password inputs are different!</p>}
                                <button className="account-settings-button change-password">Change password</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Account;