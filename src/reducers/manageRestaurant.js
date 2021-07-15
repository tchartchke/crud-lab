import { combineReducers } from "redux";
import cuid from 'cuid';

const rootReducer = combineReducers({
  restaurants: manageRestaurants,
  reviews: manageReview
})

export default rootReducer;


function manageRestaurants(state=[], action) {
  switch(action.type){
    case 'ADD_RESTAURANT':
      const newRestaraunt = {
        id: cuid(),
        text: action.text
      }
      return [...state, newRestaraunt];
    case 'DELETE_RESTAURANT':
      return state.filter(restaurant => restaurant.id !== action.id)
    default:
      return state;
  }
}

function manageReview(state=[], { type, review }) {
  switch(type){
    case 'ADD_REVIEW':
      const newReview = {
        id: cuid(),
        text: review.text,
        restaurantId: review.restaurantId
      }
      return [...state, newReview];
    case 'DELETE_REVIEW':
      // debugger;
      return state.filter(r => r.id !== review.id)
    default:
      return state;
  }
}