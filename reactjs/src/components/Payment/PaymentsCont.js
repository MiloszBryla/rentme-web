import React, {useState, useEffect} from "react";
import HeaderWithLogo from "../Header/HeaderWithLogo";
import Payment from "./PaymentComponents/Payment";
import ItemDetails from "./PaymentComponents/ItemDetails";

function PaymentCont({match}) {

    const [itemIdValue, setItemID] = useState(match.params.id);

    return(
        <React.Fragment>
            <HeaderWithLogo />
            <ItemDetails value={itemIdValue}/>
            <Payment />

        </React.Fragment>
    )

}

export default PaymentCont;