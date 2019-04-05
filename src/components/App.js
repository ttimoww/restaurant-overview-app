import React, { Component } from 'react';
import Map from './Map';
import Restaurants from './Restaurants';

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
