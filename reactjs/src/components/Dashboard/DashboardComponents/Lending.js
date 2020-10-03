import React, {useEffect, useState} from 'react';
import "../../../css/header-and-body.css";
import "../../../css/dashboard.css";
import TemplateItemImage from "../templateItemImage.jpg"
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import Item from "./Item";

function Lending(props){

    const {register, errors} = useForm();
    const [user, setUser] = useState([]);
    const [items, setItems] = useState([]);

   

    const fetchUserDetails = async () => {
        const response = await fetch(`http://localhost:8080/users/renters/${props.userId}`,{
            method: 'GET',
            credentials: 'include',

        });
        const user = await response.json();
        setUser(user);
    }

    const fetchItems = async () => {
        const response = await fetch(`http://localhost:8080/api/items/users/${props.userId}`,
        {
            method: 'GET',
            credentials: 'include',

        });
        const items = await response.json();
        setItems(items);
    }

    useEffect(() => {
        fetchUserDetails();
        fetchItems();
    }, []);

    return (
        <div>
            <div className="dashboard">
                <div className="dashboard-header">
                    <Link className="bookmark"          to={"/" + "dashboard/" + user.id + "/renting"}>Renting</Link>
                    <Link className="active-bookmark"   to={"/" + "dashboard/" + user.id + "/lending"}>Lending</Link>
                    <Link className="bookmark"          to={"/" + "dashboard/" + user.id + "/account"}>Account</Link>
                </div>
                <div className="dashboard-content-container">
                    <h7>Your Items</h7>
                    <hr/>
                    <div className="dashboard-items-list">
                        <div className="dashboard-items-list-header">
                            <p/>
                            <p className="dashboard-items-list-header-label">Name</p>
                            <p className="dashboard-items-list-header-label">Status</p>
                            <p className="dashboard-items-list-header-label">Start of booking</p>
                            <p className="dashboard-items-list-header-label">Date of return</p>
                        </div>
                        {
                            items.map(function(theItem){return <Item item={theItem}/>;
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lending;