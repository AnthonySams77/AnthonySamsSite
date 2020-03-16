import React, { Component } from "react";
import { getMovies } from "../Starter Code/services/fakeMovieService";
import Movie from "./movie";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  toggleLike = movie => {
    const movies = this.state.movies.map(m => {
      if (movie._id === m._id) m.isLiked = true;
    });
    this.setState({ movies });
  };

  render() {
    const { length: count } = this.state.movies;
    if (count === 0) return <p>There are no movies in the database.</p>;

    return (
      <React.Fragment>
        <p>Showing {this.state.movies.length} movies in the database.</p>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <Movie
                movie={movie}
                onDelete={this.handleDelete}
                onLike={this.toggleLike}
                isLiked={this.state.isLiked}
              ></Movie>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
