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
        const response = await fetch(`http://localhost:8080/api/users/renters/${userId}`);
        const user = await response.json();
        setUser(user);
        console.log(user);
    }

    return (
        <Router>
            <Switch>
                <Route path={"/" + "dashboard/" + "3" + "/renting"} component={Renting}/>
                <Route path={"/" + "dashboard/" + "3" + "/lending"} component={Lending}/>
                <Route path={"/" + "dashboard/" + "3" + "/account"} component={Account}/>

            </Switch>
        </Router>
    );
}

export default DashboardContent;