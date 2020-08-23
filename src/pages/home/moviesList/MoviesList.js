import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class MoviesList extends Component {
  render() {
    console.log("this.props", this.props);
    const { movies } = this.props;
    return (
      <>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link
              id={movie.id}
              to={{
                pathname: `/movies/${movie.id}`,
                state: { from: this.props.location },
              }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </>
    );
  }
}

export default withRouter(MoviesList);
