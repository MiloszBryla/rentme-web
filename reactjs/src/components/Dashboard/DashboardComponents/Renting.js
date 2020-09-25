import React, {useEffect, useState} from 'react';
import "../../../css/header-and-body.css";
import "../../../css/dashboard.css";
import TemplateItemImage from "../templateItemImage.jpg"
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import Item from "./Item";

function Renting(props){

    const {register, errors} = useForm();
    const [user, setUser] = useState([]);
    const [items, setItems] = useState([]);

    const fetchUserDetails = async () => {
        const response = await fetch(`http://localhost:8080/users/renters/${props.userId}`);
        const user = await response.json();
        setUser(user);
    }

    const fetchItems = async () => {
        const response = await fetch(`http://localhost:8080/api/items/users/${props.userId}`);
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
                    <Link className="active-bookmark"   to={"/" + "dashboard/" + user.id + "/renting"}>Renting</Link>
                    <Link className="bookmark"          to={"/" + "dashboard/" + user.id + "/lending"}>Lending</Link>
                    <Link className="bookmark"          to={"/" + "dashboard/" + user.id + "/account"}>Account</Link>
                </div>
                <div className="dashboard-content-container">
                    <h7>Borrowed Items</h7>
                    <hr/>

                </div>
            </div>
        </div>
    );
}

export default Renting;