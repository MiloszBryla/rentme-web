import React, {useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";
import "../../../css/header-and-body.css";

function Item(props) {
    let itemLink = "/item/view/" + props.item.id;

    return (
        <NavLink to={itemLink}>
            <div className="items-list-item" style={{animationDelay: props.orderly + "s"}}>
                <div className="item-photo-container">
                      <img className="items-list-item-photo"  src={props.item.picUrl}/>
                </div>
                <div className="items-list-item-info-area">
                    <div className="items-list-item-info">
                        <p className="items-list-item-name">{props.item.name}</p>
                        <p className="items-list-item-price">Price: {props.item.price} pln/day</p>
                       <p className="items-list-item-location">Location: {props.item.owner.city}</p>
                    </div>
                </div>
            </div>
        </NavLink>
    );
}

export default Item;