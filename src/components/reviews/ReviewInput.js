import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(){
    super();
    this.state = { text: '' };
  }
  handleChange = (e) => {
    this.setState({ text : e.target.value });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const restaurantId = this.props.restaurantId;
    this.props.addReview(restaurantId, this.state)
    this.setState({ text : '' });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>New Review</label>
          <input onChange={this.handleChange} type="text" value={this.state.text}></input>
          <input type="submit"></input>
        </form>
      </div>
      
    );
  }
};

export default ReviewInput;
