import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';

class Restaurant extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
            <div className="restaurant">
                <div className="restaurant__container">
                    <div className="restaurant__info">
                        <h2 className="restaurant__name">{this.props.name}</h2>
                        <StarRatings 
                            rating={this.props.rating}
                            starRatedColor="rgb(248,206,11)"
                            numberOfStars={5}
                            starDimension="20px"
                            starSpacing="2px"
                        />
                    </div>
                    <div className="restaurant__photo">
                        <div className="restaurant__photo__placeholder" style={{backgroundImage: `url(https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${this.props.photo}&key=${process.env.REACT_APP_GOOGLE_API_KEY})`}}>
                        {/* <div className="restaurant__photo__placeholder" style={{backgroundImage: 'google.com'}}> */}
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Restaurant;