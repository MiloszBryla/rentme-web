import React from 'react';
import HeaderWithLogo from '../Header/HeaderWithLogo'
import DashboardContent from './DashboardContent'
import "../../css/header-and-body.css";

function Dashboard(){
    return (
        <div>
            <div className="wrapper">
                <HeaderWithLogo />
                <DashboardContent />
            </div>
        </div>
    );
}

export default Dashboard;