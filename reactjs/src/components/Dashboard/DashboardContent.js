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
                <Route path="/*" component={Renting}/>
                <Route path="/renting" component={Renting}/>
            </Switch>
        </Router>
    );
}

export default DashboardContent;