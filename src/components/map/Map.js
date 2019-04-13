import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import GooglePlaces from '../../services/GooglePlaces';
import RestaurantMarker from './RestaurantMarker';

class Map extends Component {
    state = { 
        loadingRestaurants : false
     }
     
    static defaultProps = {
        mapCenter : {
            lat: 52.156113,
            lng: 5.387827
        },
        zoom: 15,
        googlePlacesService : new GooglePlaces()
    }

    /**
     * Function that receives the google maps object when map is loaded
     * @param {object} map The google map object
     */
    handleApiLoaded = (map, maps) => {
        const self = this;
        map.addListener('dragend', () => self.handleInteraction(map));
        map.addListener('zoom_changed', () => self.handleInteraction(map));
        maps.event.addListenerOnce(map, 'idle', () => self.handleInteraction(map));
    };

    /**
     * Function to get called when user interacts with the map
     * @param {object} map The google map object
     */
    handleInteraction = (map) => {
        if(!this.state.loadingRestaurants){
            this.setState({loadingRestaurants: true}); 
            this.props.toggleRestaurantsLoaded(false); // Change restaurantsLoaded (state) to false in App.js
            this.props.emptyAllRestaurants(); // Empty restaurants array in App.js
            this.getRestaurants(map);
        }
    }

    /**
     * Get the nearby places based on the map's radius
     * @param {object} map The google map object
     */
    getRestaurants = (map) => {
        /**
         * Calculates the radius of the current map view
         * @param {object} map Object of the current google map
         */
        const calcRadius = (map) => {
            const bounds = map.getBounds()
            const center = bounds.getCenter();
            const ne = bounds.getNorthEast();
            const r = 3963.0;  
            const lat1 = center.lat() / 57.2958; 
            const lon1 = center.lng() / 57.2958;
            const lat2 = ne.lat() / 57.2958;
            const lon2 = ne.lng() / 57.2958;

            return r * Math.acos(Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1)) * 1000;
        }

         const headers = {
            lat : map.getCenter().lat(),
            lng : map.getCenter().lng(),
            type: 'restaurant',
            radius: calcRadius(map),
            key: process.env.REACT_APP_GOOGLE_API_KEY
        }

        this.props.googlePlacesService.nearbySearch(headers)
        .then(resp => JSON.parse(resp))
        .then((data) => {
            for (let i = 0; i < data.results.length; i++) {
                const name = data.results[i].name;
                const id = data.results[i].id;
                const rating = data.results[i].rating || 0;
                const photo = (data.results[i].photos) ? data.results[i].photos[0].photo_reference : null ;
                const coords = data.results[i].geometry.location;
                this.props.addRestaurant(name, id, rating, photo, coords);
            }
            this.props.toggleRestaurantsLoaded(true); // Change restaurantsLoaded (state) to true in App.js
            this.setState({loadingRestaurants: false}) 
        });
    }

    render() { 

        let markers = this.props.restaurants.map((res) => {
            if (this.props.minRating < res.rating) {
                return (<RestaurantMarker key={res.id} lat={res.coords.lat} lng={res.coords.lng}/>)
            } else{
                return null;
            }
        });

        return ( 
            <div className="map">
                <GoogleMapReact
                    bootstrapURLKeys = {{key: process.env.REACT_APP_GOOGLE_API_KEY}}
                    defaultCenter = {this.props.mapCenter}
                    defaultZoom = {this.props.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
                >
                    {markers}
                </GoogleMapReact>
            </div>
         );
    }
}
 
export default Map;