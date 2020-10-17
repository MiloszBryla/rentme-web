import React, {useEffect, useState} from 'react';
import "../../../css/header-and-body.css";
import "../../../css/dashboard.css";
import TemplateItemImage from "../templateItemImage.jpg"
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";

function OwnedItem(props){

    return (
        <a className="dashboard-item" href="#">
            <div className="dashboard-item-photo-container">
                <img className="dashboard-item-photo" src={TemplateItemImage}/>
            </div>
            <span>{props.item.name}</span>
            <span>Item status</span>
            <span>Start of booking</span>
            <span>Date of return</span>
        </a>
    );
}

export default OwnedItem;