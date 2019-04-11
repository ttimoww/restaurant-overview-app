import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';

class Filter extends Component {
    state = {
        minRating : 0
    }

    changeRating = ( newRating, name ) => {
        this.props.changeRating(newRating);
        this.setState({
          minRating: newRating
        });
      }

    render() { 
        return ( 
            <div className="filter">
                <div className="filter__container">
                    <p>Minimal Rating</p>
                    <StarRatings
                        changeRating={this.changeRating}
                        rating={this.state.minRating}
                        name='rating'
                        starRatedColor="rgb(248,206,11)"
                        starHoverColor="rgb(248,206,11)"
                        numberOfStars={5}
                        starDimension="25px"
                    />
                </div>
            </div>
         );
    }
}
 
export default Filter;