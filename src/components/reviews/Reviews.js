import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    const { reviews, restaurantId, deleteReview } = this.props;
    const reviewsOfThisRestaurant = reviews.filter(review => review.restaurantId === restaurantId)
    const renderReviews = reviewsOfThisRestaurant.map(review => <Review key={review.id} review={review} deleteReview={deleteReview}/>)

    return (
      <ul>
        {renderReviews}
      </ul>
    );
  }
};

export default Reviews;