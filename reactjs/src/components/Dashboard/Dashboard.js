import React, {useState} from 'react';
import HeaderWithLogo from '../Header/HeaderWithLogo'
import DashboardContent from './DashboardContent'
import "../../css/header-and-body.css";
import Login from "../Login/Login"

function Dashboard({match}){

    const [userIdValue, setUserID] = useState(match.params.id);

    return (
        <div>
            <Login />
            <div className="wrapper">
                <HeaderWithLogo />
                <DashboardContent value={userIdValue}/>
            </div>
        </div>
    );
}

export default Dashboard;