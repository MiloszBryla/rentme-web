import React, {useEffect, useState} from 'react';
import "../../../css/header-and-body.css";
import "../../../css/dashboard.css";
import TemplateItemImage from "../templateItemImage.jpg"
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import Item from "./Item";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

function Renting(props) {

    const {register, errors} = useForm();
    const [user, setUser] = useState([]);
    const [items, setItems] = useState([]);

    const fetchDetails = async () => {
        if (Cookies.get("Authorization") !== undefined) {
            const token = Cookies.get("Authorization");
            const decodedToken = jwt_decode(token);
            const response = await fetch(`http://localhost:8080/users/renters?email=${decodedToken.sub}`, {
                method: 'GET',
                credentials: 'include',
            })
            const user = await response.json();
            console.log(user);
            setUser(user);

            const itemsResponse = await fetch(`http://localhost:8080/api/items/users/${user.id}`,
                {
                    method: 'GET',
                    credentials: 'include',

                });
            const items = await itemsResponse.json();
            setItems([]);
            console.log(items)
        }
    }

    useEffect(() => {
        fetchDetails();
    }, []);

    return (
        <div>
            <div className="dashboard">
                <div className="dashboard-header">
                    <Link className="active-bookmark" to="/dashboard/renting">Renting</Link>
                    <Link className="bookmark" to="/dashboard/lending">Lending</Link>
                    <Link className="bookmark" to="/dashboard/account">Account</Link>
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