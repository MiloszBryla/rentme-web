import React, {useEffect, useState} from 'react';
import "../../../css/header-and-body.css";
import "../../../css/dashboard.css";
import TemplateItemImage from "../templateItemImage.jpg"
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";

function OwnedItem(props){


    console.log(props.reservation.item.picUrl);

    return (
        <a className="dashboard-item" href="#">
            <div className="dashboard-item-photo-container">
                <img className="dashboard-item-photo" src={props.reservation.item.picUrl}/>
            </div>
            <span>{props.reservation.item.name}</span>
            <span>Item status</span>
            <span>{props.reservation.dateStart}</span>
            <span>{props.reservation.dateEnd}</span>
        </a>
    );
}

export default OwnedItem;