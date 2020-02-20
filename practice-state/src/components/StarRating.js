import React, { Component } from "react";
import Star from './Star';

class StarRating extends Component {

  // Initialize a 'rating' state
  state = {
    rating: 0
  }

  // Write a function that returns 5 Star components
renderStars = () => {
  let stars = []
  let maxRating = 5

  for(let i = 1; i <= maxRating; i += 1) {
    stars.push(<Star id={i} key={i} onClick={this.handleClick} rating={this.state.rating} />)
  }
  return stars
}
  // Write an event handler that updates the rating state.
  // Pass the function to a Star component via props
  handleClick = (id) => {
    let rating = (id === this.state.rating) ? 0 : id
    this.setState({
      rating
    })
  }
  render() {
    return (
      <ul className="course--stars">
        {this.renderStars()}
      </ul>
    );
  }
}

export default StarRating;