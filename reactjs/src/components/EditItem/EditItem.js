import React, {useState, useEffect} from "react";
import {useForm} from "react-hook-form";
import "../../css/edit-item.css"
import "../../css/add-item.css"
import "../../css/header-and-body.css"
import Image from "../../assets/camera.jpg"
import AddImage from "../../assets/icon-with-mountain.svg"

function EditItem(id) {

    const [itemId, setItemID] = useState(id.value);

    const [item, setItem] = useState([]);

    const [address, setAddress] = useState([]);

    const [category, setItems] = useState([]);

    useEffect(() => {
        fetchCategories();
        fetchItemDetails(itemId);
        fetchUserAddress(itemId);
    }, []);

    const fetchCategories = async () => {
        const response = await fetch('http://localhost:8080/api/categories',
            {
                method: 'GET',
                credentials: 'include',

            });
        const category = await response.json();
        setItems(category);
    }
    const fetchUserAddress = async (itemId) => {
        const response = await fetch(`http://localhost:8080/users/address/item/${itemId}`,
            {
                method: 'GET',
                credentials: 'include',


            });
        const address = await response.json();
        setAddress(address);
    }

    const fetchItemDetails = async (itemId) => {
        const response = await fetch(`http://localhost:8080/api/items/${itemId}`,
            {
                method: 'GET',
                credentials: 'include',

            });
        const item = await response.json();
        setItem(item);
    }

    const {register, handleSubmit, errors} = useForm();

    const onSubmit =  async (data) => {
        const headers = new Headers();
        headers.append('Content-type', 'application/json');
        console.log(data)

        const options = {
            method: 'PUT',
            headers,
            body: JSON.stringify(data)
        }

        const request = new Request('http://localhost:8080/api/items', options);
        const response = await fetch(request);
        const status = await response.status;
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
            <h1 id="lets-get-started">Here you can edit your item</h1>
            <div className="inputs">
                <h4>Item name</h4>
                <input className="item-price" name="name" placeholder={item.name} ref={register({required: true, minLength: 3})}/>
                {errors.itemName && <p className="error-message">Item name is too short!</p>}
                <h2>Item Info</h2>
                <h4><label htmlFor="quest-type">Category</label></h4>
                <select className="type-selector" id="quest-type" name="category.id">
                    {category.map(element => (
                        <option value={element.id}>{element.description}</option>
                    ))}
                </select>

                <h4>Description:</h4>
                <textarea className="item-description" name ="description" placeholder={item.description} ref={register({required: true, minLength: 3})}/>
                {errors.description && <p className="error-message">Item description is too short</p>}
                <h2>Price</h2>
                <h4>Price (PLN/per day):</h4>
                <input className="item-price" name="price" placeholder={item.price} ref={register({required: true, minLength: 2})}/>

                <h2>Address</h2>
                <h4>City:</h4>
                <input className="item-details" name="city" placeholder={address.city} ref={register({required: true, minLength: 3})}/>
                {errors.city && <p className="error-message">City name is too short</p>}
                <h4>Street with household number:</h4>
                <input className="item-details" name="address" placeholder={address.address} ref={register({required: true, minLength: 3})}/>
                {errors.address && <p className="error-message">This address is not valid</p>}
                <h4>Post-code:</h4>
                <input className="item-details" name="postCode" placeholder={address.postCode} ref={register({required: true, minLength: 6, maxLength: 6})}/>
                {errors.postCode && <p className="error-message">Post-Code number must be in format XX-XXX</p>}
                <h4>Manage item's images</h4>
            </div>
            <div className="input-image-grid">
                <div className="edit-item-item-photo-container" type="button" href="#">
                    <img class="edit-item-item-photo" src={Image}/>
                </div>
                <div className="edit-item-item-photo-container">
                    <img class="edit-item-item-photo" src={Image}/>
                </div>
                <div className="edit-item-item-photo-container">
                    <img class="edit-item-item-photo" src={Image}/>
                </div>
                <div className="edit-item-item-photo-container">
                    <img class="edit-item-item-photo" src={Image}/>
                </div>
                <div className="edit-item-item-photo-container">
                    <img class="edit-item-item-photo" src={Image}/>
                </div>
                <div className="edit-item-item-photo-container">
                    <img class="edit-item-item-photo" src={Image}/>
                </div>
                <div className="add-item-photo-container">
                    <img class="edit-item-item-photo" src={AddImage}/>
                </div>
            </div>
            <div className="submit-button">
                <button className="button" type="submit">Update Item</button>
            </div>

        </div>
        </form>
    );
}

export default EditItem;
