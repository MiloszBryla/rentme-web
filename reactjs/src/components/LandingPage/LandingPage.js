import React from 'react';
import "../../css/header-and-body.css";
import "../../css/index.css";
import LandingPageContent from "./LandingPageContent"
import Login from "../Login/Login";

function LandingPage() {
    return (
        <div>
            <Login />
            <div className="wrapper">
                <LandingPageContent />
            </div>
        </div>
    );
}

export default LandingPage;

