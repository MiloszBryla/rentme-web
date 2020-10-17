import React, {useState, useEffect} from "react";
import HeaderWithLogo from '../Header/HeaderWithLogo'
import ItemViewContent from "./ItemViewContent";

function ItemView({match}) {

    const [itemIdValue, setItemID] = useState(match.params.id);
    return (
        <React.Fragment>
            <HeaderWithLogo />
            <ItemViewContent value={itemIdValue}/>
        </React.Fragment>
    );
}

export default ItemView;