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

    /**
     * Function that receives the google maps object when map is loaded
     * @param {map} object The google map object
     */
    handleApiLoaded = (map) => {
        const self = this;
        map.addListener('dragend', () => self.getRestaurants());
        map.addListener('zoom_changed', () => self.getRestaurants());
        this.getRestaurants();
    };

    getRestaurants= () => {
        console.log('Get Restaurants')
    }

    render() { 
        return ( 
            <div className="map">
                <GoogleMapReact
                    bootstrapURLKeys = {{key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
                    defaultCenter = {this.props.mapCenter}
                    defaultZoom = {this.props.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map }) => this.handleApiLoaded(map)}
                ></GoogleMapReact>
            </div>
         );
    }
}
 
export default Map;