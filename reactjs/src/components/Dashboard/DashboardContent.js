import React, {useEffect, useState} from 'react';
import "../../css/header-and-body.css";
import "../../css/dashboard.css";
import TemplateItemImage from "./templateItemImage.jpg"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link,
} from "react-router-dom";
import PaymentCont from "../Payment/PaymentsCont";
import Renting from "./DashboardComponents/Renting"
import Lending from "./DashboardComponents/Lending"
import Account from "./DashboardComponents/Account"

function DashboardContent(id){

    const [userId, setUserID] = useState(id.value);
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetchUserDetails(id);
    }, []);

    const fetchUserDetails = async (userId) => {
        const response = await fetch(`http://localhost:8080/users/renters/1`, {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        })
        // const user = await response.json();
        // console.log(response.json())
    }

    return (
        <Router>
            <Switch>
                <Route path="/dashboard/renting" component={Renting} />
                <Route path="/dashboard/lending" component={Lending} />
                <Route path="/dashboard/account" component={Account} />
                <Route path="/dashboard/" component={Renting} />
            </Switch>
        </Router>
    );
}

export default DashboardContent;