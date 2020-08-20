import React, { Component } from "react";
import { Link } from "react-router-dom";

class MoviesList extends Component {
  render() {
    const { trendingMovies } = this.props;
    return (
      <>
        {trendingMovies.map((movie) => (
          <li key={movie.id}>
            <Link id={movie.id} to={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </>
    );
  }
}

export default MoviesList;
