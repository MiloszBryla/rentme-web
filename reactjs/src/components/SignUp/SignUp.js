import React, {useRef} from "react";
import {useForm} from "react-hook-form";
import "../../css/header-and-body.css";
import "../../css/sign-up.css";
import Login from "../Login/Login";
import HeaderWithLogo from "../Header/HeaderWithLogo";

function SignUp() {
    const {register, handleSubmit, errors, getValues} = useForm({});

    const onSubmit = async (data) => {
        const headers = new Headers();
        headers.append('Content-type', 'application/json');
        console.log(data)

        const options = {
            method: 'POST',
            headers,
            body: JSON.stringify(data)
        }

        const request = new Request('http://localhost:8080/users', options,
            {
                method: 'GET',
                credentials: 'include',

            });
        const response = await fetch(request);
        const status = await response.status;

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
                                <h2 className="sign-up-h2">Sign up</h2>
                                <h3 className="">It's quick and easy!</h3>
                            </div>
                            <div className="input">
                                <p>First name</p>
                                <input type="text"
                                       className="input-field name-input"
                                       placeholder="Name"
                                       name="firstName"
                                       ref={register({required: "First name is required"})}/>
                                {errors.name && <p><b>{errors.name.message}</b></p>}
                            </div>
                            <div className="input">
                                <p>Street</p>
                                <input type="text"
                                       className="input-field address-input"
                                       placeholder="Street"
                                       name="address"
                                       ref={register({required: "Street name is required"})}/>
                                {errors.street && <p><b>{errors.street.message}</b></p>}
                            </div>
                            <div className="input"><p>Postal code</p>
                                <input type="text"
                                       className="input-field address-input"
                                       placeholder="Postal code"
                                       name="postCode"
                                       ref={register({required: "Postal code is required"})}/>
                                {errors.postal_code && <p><b>{errors.postal_code.message}</b></p>}
                            </div>
                            <div className="input">
                                <p>Last name</p>
                                <input type="text"
                                       className="input-field surname-input"
                                       placeholder="Last name"
                                       name="lastName"
                                       ref={register({required: "Last name is required"})}/>
                                {errors.last_name && <p><b>{errors.last_name.message}</b></p>}
                            </div>
                            <div className="input"><p>Building number</p>
                                <input type="text"
                                       className="input-field address-input"
                                       placeholder="Building number"
                                       name="building_number"
                                       ref={register({
                                           required: "Building number is required",
                                           pattern: {
                                               value: /^([0-9]*[1-9][0-9]*[a-zA-Z]?)$/i,
                                               message: "invalid building number"
                                           }
                                       })}/>
                                {errors.building_number && <p><b>{errors.building_number.message}</b></p>}
                            </div>
                            <div className="input"><p>Date of birth</p>
                                <input type="date"
                                       className="input-field DOB-input"
                                       name="date_of_birth"
                                       ref={register({required: "Date of birth is required"})}/>
                                {errors.date_of_birth && <p><b>{errors.date_of_birth.message}</b></p>}
                            </div>
                            <div className="input">
                                <p>Email</p>
                                <input type="email"
                                       className="input-field email-input"
                                       placeholder="Email"
                                       name="email"
                                       ref={register({
                                           required: "Email is required",
                                           pattern: {
                                               value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                               message: "invalid email address"
                                           }
                                       })}/>
                                {errors.email && <p><b>{errors.email.message}</b></p>}
                            </div>
                            <div className="input">
                                <p>Apartment number</p>
                                <input type="text"
                                       className="input-field address-input"
                                       placeholder="Apartment number"
                                       name="apartment_number"
                                       ref={register({
                                           pattern: {
                                               value: /^([0-9]*[1-9][0-9]*[a-zA-Z]?)$/i,
                                               message: "invalid apartment number"
                                           }
                                       })}/>
                                {errors.apartment_number && <p><b>{errors.apartment_number.message}</b></p>}
                            </div>
                            <div className="input">
                                <p>Password</p>
                                <input type="password"
                                       className="input-field password-input"
                                       placeholder="********"
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
                            <div className="input">
                                <p>Phone number</p>
                                <input type="tel"
                                       className="input-field phone-input"
                                       placeholder="Phone number"
                                       name="phone_number"
                                       ref={register({
                                           required: "Phone number is required",
                                           pattern: {
                                               value: /^[0-9\-\+]{9,12}$/i,
                                               message: "invalid phone number"
                                           }
                                       })}/>
                                {errors.phone_number && <p><b>{errors.phone_number.message}</b></p>}
                            </div>
                            <div className="input"><p>City</p>
                                <input type="text"
                                       className="input-field address-input"
                                       placeholder="City"
                                       name="city"
                                       ref={register({required: "City is required"})}/>
                                {errors.city && <p><b>{errors.city.message}</b></p>}
                            </div>
                            <div className="input">
                                <p>Repeat your password</p>
                                <input type="password"
                                       className="input-field repeat-input"
                                       placeholder="********"
                                       name="password"
                                       ref={register({
                                           required: "repeat password field is required",
                                           minLength: {
                                               value: 8,
                                               message: "password is too short - 8 characters required"
                                           },
                                           validate: (value) => value === getValues('password') || "Passwords don't match."
                                       })}/>
                                {errors.repeat_password && <p><b>{errors.repeat_password.message}</b></p>}
                            </div>

                            <div className="title">
                                <div className="sign-up-submit-button">
                                    <button className="signUpBtn" type="submit" onClick={handleSubmit(onSubmit)}>Sign me
                                        up
                                    </button>
                                    <div className="warning-message hidden">
                                        <p>All fields are required</p></div>
                                </div>
                            </div>
                        </div>
                        <h6 className="text-agreement">
                            By Clicking "Sign me up", you agree to our <a href="#">Terms</a> and that you have
                            read our <a href="#"> Data Policy</a>.
                        </h6>
                    </form>
                </div>
            </div>
        </React.Fragment>

    );
}

export default SignUp;