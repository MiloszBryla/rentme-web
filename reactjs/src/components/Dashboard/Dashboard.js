import React, {useState} from 'react';
import HeaderWithLogo from '../Header/HeaderWithLogo'
import DashboardContent from './DashboardContent'
import "../../css/header-and-body.css";

function Dashboard({match}){

    const [userIdValue, setUserID] = useState(match.params.id);

    return (
        <div>
            <div className="wrapper">
                <HeaderWithLogo />
                <DashboardContent value={userIdValue}/>
            </div>
        </div>
    );
}

export default Dashboard;