import React, { Component } from 'react';
import Filter from './Filter';

class Restaurants extends Component {
    render() { 
        return ( 
            <div className="restaurants">
                <Filter changeRating={this.props.changeRating} />
            </div>
         );
    }
}
 
export default Restaurants;