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
                <Route path={"/" + "dashboard/" + userId + "/renting"}
                       render={(props) => (
                    <Renting {...props} userId={userId} />
                    )}/>
                <Route path={"/" + "dashboard/" + userId + "/lending"}
                       render={(props) => (
                           <Lending {...props} userId={userId} />
                       )}/>
                <Route path={"/" + "dashboard/" + userId + "/account"}
                       render={(props) => (
                    <Account {...props} userId={userId} />
                )}/>
                <Route path={"/" + "dashboard/" + userId }
                       render={(props) => (
                           <Renting {...props} userId={userId} />
                       )}/>

            </Switch>
        </Router>
    );
}

export default DashboardContent;