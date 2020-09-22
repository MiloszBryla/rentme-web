import React, {useState, useEffect} from "react";
import HeaderWithLogo from '../Header/HeaderWithLogo'
import EditItem from "./EditItem";

function ItemContent({match}) {

    const [itemIdValue, setItemID] = useState(match.params.id);

    return (
        <React.Fragment>
            <HeaderWithLogo />
            <EditItem value={itemIdValue}/>
        </React.Fragment>
    );
}

export default ItemContent;