import React, {useState, useEffect} from "react";
import HeaderWithLogo from '../Header/HeaderWithLogo'
import EditItem from "./EditItem";

function ItemContent({match}) {

    const [itemIdValue, setItemID] = useState(match.params.id);

    return (
        <div className="wrapper">
            <HeaderWithLogo />
            <EditItem value={itemIdValue}/>
        </div>
    );
}

export default ItemContent;