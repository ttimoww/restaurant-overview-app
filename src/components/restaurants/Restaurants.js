import React, { Component } from 'react';
import Filter from './Filter';
import Restaurant from './Restaurant'

class Restaurants extends Component {
    render() { 

        const restaurants = this.props.restaurants.map((res) => {
            if (this.props.minRating < res.rating){
                return <Restaurant key={res.id} name={res.name} rating={res.rating} />;
            }else{
                return null;
            }
        });

        return ( 
            <div className="restaurants">
                <Filter changeRating={this.props.changeRating} />
                {restaurants}
            </div>
         );
    }
}
 
export default Restaurants;