import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  renderResturants = () => {
    const { restaurants, deleteRestaurant } = this.props;
    return restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={deleteRestaurant}/>)
  }

  render() {
    return(
      <ul>
        {this.renderResturants()}
      </ul>
    );
  }
};

export default Restaurants;