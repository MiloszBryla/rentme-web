import React, {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";
import "../../css/edit-item.css"
import "../../css/add-item.css"
import "../../css/header-and-body.css"
import "../../css/map.css"
import "../../css/items-list.css"
import HeaderWithLogoAndSearchBar from "../Header/HeaderWithLogoAndSearchBar";
import Item from "./ItemsListComponents/Item"
import SortingOptions from "./ItemsListComponents/SortingOptions"
import ItemsListMap from "../Map/ItemsListMap"


function ItemsListContent(searchPhrase){
    let n = -0.1;
    const [searchPhraseContent, setSearchPhrase] = useState(searchPhrase.phrase);
    const [fetchedItems, setItems] = useState([]);

    const fetchItems = async () => {
        if (searchPhraseContent.startsWith("category: ")) {
            const categoryToBrowse = searchPhraseContent.slice(10);
            const response = await fetch(`http://localhost:8080/api/items?byCategory=${categoryToBrowse}`,
                {
                    method: 'GET',
                    credentials: 'include',

                });
            const items = await response.json();
            setItems(items);
        }
        else{
            const response = await fetch(`http://localhost:8080/api/items?nameContaining=${searchPhraseContent}`,
                {
                    method: 'GET',
                    credentials: 'include',
                });
            const items = await response.json();
            setItems(items);
        }
    }

    useEffect(() => {fetchItems(searchPhrase)}, []);



    return (
        <React.Fragment>
                <div id="items-area" >
                    <SortingOptions/>
                    <div className="items-list">
                        {
                            fetchedItems.map(function(theItem){return <Item orderly={n+=0.1} item={theItem}/>;
                            })
                        }
                    </div>
                </div>
                <div className="map-wrapper">
                    <div className="sub-map-wrapper">
                        <div className="map-container">
                            <ItemsListMap itemsToPlace = {fetchedItems}/>
                        </div>
                    </div>
                </div>
        </React.Fragment>

    );


}

export default ItemsListContent;
