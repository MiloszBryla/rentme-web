import React from 'react';
import Pointer from "../../../assets/pointer-price.svg"

function ItemsListMarker(props){
    return (
        <div className={"items-list-map-marker"}>
            <p style={{ height: '40px', width: '60px', position: 'absolute', right: '-69px', textAlign: 'center'}}> {props.price} </p>
            <img style={{ height: '60px', width: '80px'}} src={Pointer}/>
        </div>
    );
};

export default ItemsListMarker;