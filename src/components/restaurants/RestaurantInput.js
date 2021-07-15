import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(){
    super();
    this.state = { text : '' }
  }
  handleChange = (e) => {
    this.setState({ text : e.target.value });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addRestaurant(this.state)
    this.setState({ text : '' });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>New Restaraunt</label>
          <input onChange={this.handleChange} type="text" value={this.state.text}></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
