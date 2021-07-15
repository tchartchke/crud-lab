import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';

import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant}/>
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: text => dispatch({ type: 'ADD_RESTAURANT' , text: text.text}),
    deleteRestaurant: id => dispatch({ type: 'DELETE_RESTAURANT' , id})
  }
}

const mapStateToProps = state => {
  return { restaurants: state.restaurants }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
