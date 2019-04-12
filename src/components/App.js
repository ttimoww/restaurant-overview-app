import React, { Component } from 'react';
import Map from './map/Map';
import Restaurants from './restaurants/Restaurants';

class App extends Component {
constructor(){
  super();
  this.state = {
    restaurantsLoaded : false,
    restaurants : [],
    minRating: 0
  }
}

  /**
   * Add restaurant to current state
   * @param {string} name Name of the restaurant
   * @param {string} id Id of the restaurant
   * @param {string} rating Rating of the restaurant
   * @param {string} photo Photo reference of the restaurant
   */
  handleAddRestaurant = (name, id, rating, photo) =>{
    this.setState((prevState) => {
      return{
        restaurants : [
          ...prevState.restaurants,
          {
            name: name,
            id: id,
            rating: rating,
            photo: photo
          }
        ]
      }
    })
  }

  /**
   * Toggle the restaurantsloaded property inside state'
   * @param {boolean} bool Value to set the prop to
   */
  handleToggleRestaurantsLoaded = (bool) => this.setState({restaurantsLoaded: bool});

  /**
   * Empty all the curent restaurants
   */
  handleEmptyAllRestaurants = () => this.setState({restaurants: []});

  /**
   * Handle the minimal rating change
   * @param {number} rating The minimum rating
   */
  handleChangeRating = (rating) =>{
    this.setState({minRating : rating})
  }

  render() {
    return (
      <div className="app">
        <Map restaurantsLoaded={this.state.restaurantsLoaded} addRestaurant={this.handleAddRestaurant} toggleRestaurantsLoaded={this.handleToggleRestaurantsLoaded} emptyAllRestaurants={this.handleEmptyAllRestaurants} />
        <Restaurants restaurantsLoaded={this.state.restaurantsLoaded} restaurants={this.state.restaurants} minRating={this.state.minRating} changeRating={this.handleChangeRating} />
      </div>
    );
  }
}

export default App;
