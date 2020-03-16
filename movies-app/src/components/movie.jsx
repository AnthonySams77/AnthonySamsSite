import React, { Component } from "react";
import Like from "./common/like";

class Movie extends Component {
  // renderLike(isLiked) {
  //   if (isLIked) {
  //     return "far fa-heart";
  //   }
  //   return "fas fa-heart";
  // }

  render() {
    const movie = this.props.movie;

    return (
      <tr key={movie._id}>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>
          <Like />
        </td>
        <td></td>
        <td>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => this.props.onDelete(movie)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Movie;
