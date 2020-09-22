import React, {useState, useEffect} from "react";
import HeaderWithLogoAndSearchBar from '../Header/HeaderWithLogoAndSearchBar'
import ItemsListContent from "./ItemsListContent"
import Login from "../Login/Login";

function ItemsList({match}) {

    const [searchPhrase, setSearchPhrase] = useState(match.params.searchPhrase);

    return (
        <div >
            <Login />
            <div className="wrapper">
                <HeaderWithLogoAndSearchBar/>
                <ItemsListContent phrase={searchPhrase}/>
            </div>
        </div>
    );
}

export default ItemsList;