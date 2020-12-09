import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import ItemViewMarker from "./MapComponents/ItemViewMarker.js";

function ItemViewMap (props) {

    const AnyReactComponent = ({ text }) => <div>{text}</div>;

      const defaultProps = {
        zoom: 15
      };

    const center={
        lat: props.lat,
        lng: props.lng
    }


  return (
      // Important! Always set the container height explicitly

      <div style={{ height: '500px', width: '900px'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: ""}}
          center={center}
          defaultZoom={defaultProps.zoom}
        >

            <ItemViewMarker
                lat={props.lat}
                lng={props.lng}
            />

        </GoogleMapReact>
      </div>
    );
  }


export default ItemViewMap;