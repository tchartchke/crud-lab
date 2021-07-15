import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';

import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id}/>
        <Reviews reviews={this.props.reviews} deleteReview={this.props.deleteReview} restaurantId={this.props.restaurant.id}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: (restaurantId, text) => dispatch({ type: 'ADD_REVIEW' , review: {text: text.text, restaurantId}}),
    deleteReview: review => dispatch({ type: 'DELETE_REVIEW' , review})
  }
}

const mapStateToProps = state => {
  return { reviews: state.reviews }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
