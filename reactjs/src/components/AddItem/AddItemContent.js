import React, {useState, useEffect} from "react";
import HeaderWithLogo from '../Header/HeaderWithLogo'
import AddItem from "./AddItem";

function AddItemStructure() {

    return (
        <React.Fragment>
            <HeaderWithLogo/>
            <AddItem/>
        </React.Fragment>
    );
}

export default AddItemStructure