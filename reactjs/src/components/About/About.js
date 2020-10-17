import React from 'react';
import HeaderWithLogo from '../Header/HeaderWithLogo'
import AboutUsContent from './AboutUsContent'
import Login from "../Login/Login";
import "../../css/header-and-body.css";
import "../../css/about.css";

function About(){
    return (
        <div>
            <Login />
            <div className="wrapper">
                <HeaderWithLogo />
                <AboutUsContent />
            </div>
        </div>
    );
}

export default About;