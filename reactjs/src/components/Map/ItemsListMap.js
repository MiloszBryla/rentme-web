import React, { Component } from 'react';
import {useState, useEffect} from "react";
import GoogleMapReact from 'google-map-react';
import ItemsListMarker from "./MapComponents/ItemsListMarker";
import { withGoogleMap, GoogleMap, InfoWindow, Marker, OverlayView } from 'react-google-maps'
import map from 'lodash/map'

function ItemsListMap (props) {

    let n = -0.5;
    const defaultProps = {
      zoom: 12
    };

      // need to solve map bound problem
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

      <div style={{ height: '87.7vh', width: '100%'}}>
        <GoogleMapReact

          bootstrapURLKeys={{ key: ""}}
          center={center}
          defaultZoom={defaultProps.zoom}
        >
            {props.itemsToPlace.map(item => (
                <ItemsListMarker
                    lat={item.owner.lat}
                    lng={item.owner.lng}
                    price={item.price}
                />
            ))}

        </GoogleMapReact>
      </div>
    );
  }


export default ItemsListMap;