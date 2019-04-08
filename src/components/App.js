import React, { Component } from 'react';
import Map from './map/Map';
import Restaurants from './restaurants/Restaurants';

class App extends Component {

  render() {
    return (
      <div className="app">
        <Map />
        <Restaurants />
      </div>
    );
  }
}

export default App;
