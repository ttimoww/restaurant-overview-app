import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
    state = {  }
    static defaultProps = {
        mapCenter : {
            lat: 52.156113,
            lng: 5.387827
        },
        zoom: 15
    }

    render() { 
        return ( 
            <div className="map">
                <GoogleMapReact
                    bootstrapURLKeys = {{key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
                    defaultCenter = {this.props.mapCenter}
                    defaultZoom = {this.props.zoom}
                />
            </div>
         );
    }
}
 
export default Map;