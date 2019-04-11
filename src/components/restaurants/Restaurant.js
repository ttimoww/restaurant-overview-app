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
                            // rating={this.state.minRating}
                            // name='rating'
                            rating={this.props.rating}
                            starRatedColor="rgb(248,206,11)"
                            numberOfStars={5}
                            starDimension="20px"
                            starSpacing="2px"
                        />
                    </div>
                    <div className="restaurant__photo">
                        <p>photo</p>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Restaurant;