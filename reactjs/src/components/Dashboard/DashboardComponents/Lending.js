import React from 'react';
import "../../../css/header-and-body.css";
import "../../../css/dashboard.css";
import TemplateItemImage from "../templateItemImage.jpg"
import {Link} from "react-router-dom";

function Lending(userId){
    return (
        <div>
            <div className="dashboard">
                <div className="dashboard-header">
                    <Link className="bookmark"          to={"/" + "dashboard/" + "3" + "/renting"}>Renting</Link>
                    <Link className="active-bookmark"   to={"/" + "dashboard/" + "3" + "/lending"}>Lending</Link>
                    <Link className="bookmark"          to={"/" + "dashboard/" + "3" + "/account"}>Account</Link>
                </div>
                <div className="dashboard-content-container">
                    <h7>Your Items</h7>
                    <hr/>
                    <div className="dashboard-items-list">
                        <div className="dashboard-items-list-header">
                            <p></p>
                            <p className="dashboard-items-list-header-label">Name</p>
                            <p className="dashboard-items-list-header-label">Status</p>
                            <p className="dashboard-items-list-header-label">Start of booking</p>
                            <p className="dashboard-items-list-header-label">Date of return</p>
                        </div>
                        <a className="dashboard-item" href="#">
                            <div className="dashboard-item-photo-container">
                                <img className="dashboard-item-photo" src={TemplateItemImage}/>
                            </div>
                            <span>Item name</span>
                            <span>Item status</span>
                            <span>Start of booking</span>
                            <span>Date of return</span>
                        </a>
                        <a className="dashboard-item" href="#">
                            <div className="dashboard-item-photo-container">
                                <img className="dashboard-item-photo" src={TemplateItemImage}/>
                            </div>
                            <span>Item name</span>
                            <span>Item status</span>
                            <span>Start of booking</span>
                            <span>Date of return</span>
                        </a>
                        <a className="dashboard-item" href="#">
                            <div className="dashboard-item-photo-container">
                                <img className="dashboard-item-photo" src={TemplateItemImage}/>
                            </div>
                            <span>Item name</span>
                            <span>Item status</span>
                            <span>Start of booking</span>
                            <span>Date of return</span>
                        </a>
                        <a className="dashboard-item" href="#">
                            <div className="dashboard-item-photo-container">
                                <img className="dashboard-item-photo" src={TemplateItemImage}/>
                            </div>
                            <span>Item name</span>
                            <span>Item status</span>
                            <span>Start of booking</span>
                            <span>Date of return</span>
                        </a>
                        <a className="dashboard-item" href="#">
                            <div className="dashboard-item-photo-container">
                                <img className="dashboard-item-photo" src={TemplateItemImage}/>
                            </div>
                            <span>Item name</span>
                            <span>Item status</span>
                            <span>Start of booking</span>
                            <span>Date of return</span>
                        </a>
                        <a className="dashboard-item" href="#">
                            <div className="dashboard-item-photo-container">
                                <img className="dashboard-item-photo" src={TemplateItemImage}/>
                            </div>
                            <span>Item name</span>
                            <span>Item status</span>
                            <span>Start of booking</span>
                            <span>Date of return</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lending;