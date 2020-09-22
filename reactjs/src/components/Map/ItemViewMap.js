import React, { Component } from 'react';
import {useState, useEffect} from "react";
import GoogleMapReact from 'google-map-react';
import ItemViewMarker from "./MapComponents/ItemViewMarker.js";

function ItemViewMap (props) {

    const AnyReactComponent = ({ text }) => <div>{text}</div>;

      const defaultProps = {
        zoom: 15
      };

      // google api key needed
      // const center={
      //     lat: Number(props.lat - 0.001),
      //     lng: Number(props.lon + 0.002)
      // }
    const center={
        lat: Number(50.0484729),
        lng: Number(19.9589230)
    }


  return (
      // Important! Always set the container height explicitly

      <div style={{ height: '500px', width: '900px'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: ""}}
          center={center}
          defaultZoom={defaultProps.zoom}
        >

            {/*google api key needed*/}
            {/*<Marker*/}
            {/*    lat={props.lat}*/}
            {/*    lng={props.lon}*/}
            {/*/>*/}

            <ItemViewMarker
                lat={50.0484729}
                lng={19.9589230}
            />

        </GoogleMapReact>
      </div>
    );
  }


export default ItemViewMap;