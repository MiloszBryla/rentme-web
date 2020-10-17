import React from "react";
import HeaderWithLogo from '../Header/HeaderWithLogo'
import AddItem from "./AddItem";

function AddItemStructure() {

    return (
        <div className="wrapper">
            <HeaderWithLogo/>
            <AddItem/>
        </div>
    );
}

export default AddItemStructure