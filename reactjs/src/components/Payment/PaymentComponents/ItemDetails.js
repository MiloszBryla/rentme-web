import React, {useState, useEffect} from "react";
import {useForm} from "react-hook-form";
import "../../../css/item-view.css";
import "../../../css/header-and-body.css";
import "../../../css/payment.css";

function ItemDetails(id) {

    const [itemId, setItemID] = useState(id.value);
    const [item, setItem] = useState([]);
    const [user, setUser] = useState([]);
    let [estimatedPrice, setEstimatedPrice] = useState(0);



    useEffect(() => {
        fetchItemDetails(itemId);
        fetchUserName(itemId)
    }, []);

    const fetchItemDetails = async (itemId) => {
        const response = await fetch(`http://localhost:8080/api/items/${itemId}`,
            {
                method: 'GET',
                credentials: 'include',

            });
        const item = await response.json();
        console.log(item);
        setItem(item);
    }

    const fetchUserName = async (itemId) => {
        const response = await fetch(`http://localhost:8080/users?byItemId=${itemId}`,
            {
                method: 'GET',
                credentials: 'include',

            });
        const user = await response.json();
        setUser(user);
    }

    function getDays() {
        let start = document.querySelector(".start-date").value.split('-');
        let end = document.querySelector(".end-date").value.split('-');

        let startDate = new Date(start[0], start[1] - 1, start[2]);
        let endDate = new Date(end[0], end[1] - 1, end[2]);

        let startDateMiilisec = startDate.getTime();
        let endDateMiilisec = endDate.getTime();

        const oneDayMilisec = 24 * 60 * 60 * 1000;

        let diffInDays = Math.abs((startDateMiilisec - endDateMiilisec) / oneDayMilisec) + 1;
        return diffInDays;
    }

    function calculatePrice() {
        let days = getDays();
        let price = item.price;
        let estimatedPrice = days * price;
        if (!isNaN(estimatedPrice)) {
            setEstimatedPrice(days * price);
        }
    }

    return (
        <div className="payment-container">
            <div id="photo-name-payment-container">
                    <div className="picture-containter">
                        <img className="picture-view" alt="item-image" src={item.picUrl}/>
                    </div>
            </div>
            <div className="description-renter">
                <h1 className="summary-payment">Summary of your purchase!</h1>
                <p className="summary-description">Your item: {item.name}</p>
                <p className="summary-description"> Reting from:  {user.firstName} {user.lastName}</p>
                <p className="summary-description" >Renting dates: 15.08.2020 - 16.08.2020 </p>
                <p className="summary-payment-price">To pay: {estimatedPrice} PLN</p>
            </div>
        </div>


    )
}

export default ItemDetails;