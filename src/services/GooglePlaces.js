class GooglePlaces{

    /**
     * Do an HTTP request to the google places api wich returns nearby places
     * @param {headers} Object Object with the headers for the api call
     */
    nearbySearch = (headers) => {
        const url = `https://cors-anywhere.herokuapp.com/` + `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${headers.lat},${headers.lng}&radius=${headers.radius}&type=${headers.type}&key=${headers.key}`;
        return new Promise(function(resolve, reject) {
            var req = new XMLHttpRequest();
            req.open('GET', url);

            req.onload = function() {
                // .onload Will always be called, even with 404 so check the status
                if (req.status === 200) {
                    resolve(req.response);
                }
                else {
                    reject(Error(req.statusText));
                }
            };
            req.onerror = function() {
                reject(Error("Network Error"));
            };
            req.send();
        });
    };

    placeDetails = () => {
        return
    }
}

export default GooglePlaces;