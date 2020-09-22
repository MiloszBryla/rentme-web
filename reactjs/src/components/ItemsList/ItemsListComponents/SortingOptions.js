import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "../../../css/header-and-body.css";



function SortingOptions() {

    return (
        <select className="sorting-option-inputs-list items-list-sorting-list" required>
            <option value="low-price">Price asc</option>
            <option value="high-price">Price desc</option>
            <option value="name">Name asc</option>
            <option value="name">Name desc</option>
            <option value="distance">Lowest distance</option>
            <option value="date-added">Date added</option>
        </select>
    );
}

export default SortingOptions;