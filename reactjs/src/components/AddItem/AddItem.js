import React, {useState, useEffect} from "react";
import {useForm} from "react-hook-form";
import "../../css/edit-item.css"
import "../../css/add-item.css"
import "../../css/header-and-body.css"

function AddItem() {

    useEffect(() => { fetchCategories(); }, []);

    const [category, setItems] = useState([]);
    const fetchCategories = async () => {
        const response = await fetch('http://localhost:8080/api/categories');
        const category = await response.json();
        setItems(category);
    }

    const {register, handleSubmit, errors} = useForm();

    const onSubmit =  async (data) => {
        const headers = new Headers();
        headers.append('Content-type', 'application/json');
        console.log(data)

        const options = {
            method: 'POST',
            headers,
            body: JSON.stringify(data)
        }

        const request = new Request('http://localhost:8080/api/items', options);
        const response = await fetch(request);
        const status = await response.status;
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1 id="lets-get-started">Let's get started! </h1>
            <h2 id="show-what-u-got"> Show us what you've got</h2>

            <div className="inputs">
                <h4>What's your item?</h4>
                <input className="add-item-item-name" placeholder="Item name" name="itemName" ref={register({required: true, minLength: 3})}/>
                {errors.itemName && <p className="error-message">Item name is too short!</p>}

                <div id="input-image">
                    <a><img id="icon" src={require('../../assets/icon-with-mountain.svg')}/></a>
                    <a href="#" className="upload-image"> Click to upload image</a>
                </div>

                <h2 className="add-item-h2"> Describe your item</h2>
                <h4><label htmlFor="quest-type">Categories</label></h4>
                <select className="type-selector" id="quest-type" name="category" ref={register}>
                    <option value="" selected disabled hidden>Choose...</option>
                    {category.map(element => (
                        <option value={element.id}>{element.description}</option>
                    ))} </select>

                <h4>Description:</h4>
                <textarea className="item-description" name="description" placeholder="Describe your item..."
                          ref={register({required: true, minLength: 10})}/>
                {errors.description && <p className="error-message">Description is too short!</p>}

                <h2 className="add-item-h2">How much? </h2>
                <h4>Price (PLN/per day):</h4>
                <input className="item-price" name="price" placeholder="Your price per day" ref={register({required: true, minLength: 1})}/>
                <h2 className="add-item-h2">Your personal details and address</h2>
                <h4>Name:</h4>
                <input className="item-details" name="name" placeholder="Enter your name" ref={register({required: true, minLength: 3})}/>
                {errors.name && <p className="error-message">Name is too short!</p>}
                <h4>City:</h4>
                <input className="item-details" name="city" placeholder="Enter your city" ref={register({required: true, minLength: 3})}/>
                {errors.city && <p className="error-message">City name is too short!</p>}
                <h4>Home address:</h4>
                <input className="item-details" name="address" placeholder="What is the address?" ref={register({required: true, minLength: 3})}/>
                {errors.address && <p className="error-message">Address is too short!</p>}
                <h4>Post-code:</h4>
                <input className="item-details" name="postCode" placeholder="Post-code" ref={register({required: true, minLength: 6, maxLength: 6})}/>
                {errors.postCode && <p className="error-message">Post-Code number must be in format XX-XXX</p>}
                <h4>Phone number:</h4>
                <input className="item-details" name="phoneNumber" placeholder="Your phone number" ref={register({required: true, value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/ })}/>
                {errors.phoneNumber && <p className="error-message">Phone number is not valid!</p>}
                <h6>
                    By Clicking "Add item for rent", you agree to our <a href="#">Terms</a> and that you have
                    read our <a href="#"> Data Policy</a>.
                </h6>
                <div className="add-item-submit-button">
                    <button className="button" type="submit">Add item for rent</button>
                </div>
            </div>
        </form>
    )

}
export default AddItem;