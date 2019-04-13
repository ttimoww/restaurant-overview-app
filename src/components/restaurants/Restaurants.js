import React, { Component } from 'react';
import Filter from './Filter';
import Restaurant from './Restaurant'

class Restaurants extends Component {
    render() { 

        // Store all restaurants in restaurants const
        const restaurants = this.props.restaurants.map((res) => {
            if (this.props.minRating < res.rating){
                return <Restaurant key={res.id} name={res.name} rating={res.rating} photo={res.photo} />;
            }else{
                return null;
            }
        });
        
    

        return ( 
            <div className="restaurants">
                <Filter changeRating={this.props.changeRating} />
                {this.props.restaurantsLoaded ? (restaurants) : (<i className="fas fa-spinner fa-pulse restaurants-loading"></i>)}
                {   this.props.restaurants.filter((res) => res.rating > this.props.minRating).length === 0 && this.props.restaurantsLoaded 
                    ? (<p className="no-results">No results found for this area and/or filter</p>) 
                    : (null)
                }
            </div>
         );
    }
}
 
export default Restaurants;