import React, { Component } from "react";
import api from "../../services/api";
// import { Link } from "react-router-dom";
import MoviesList from "./moviesList/MoviesList";
// import MoviesList from "./moviesList/MoviesList";

class Home extends Component {
  state = {
    trendingMovies: [],
  };
  componentDidMount() {
    api
      .getPopularMovies()
      .then((res) => this.setState({ trendingMovies: res.data.results }));
  }
  render() {
    const { trendingMovies } = this.state;
    return (
      <>
        <h1>Trending today</h1>
        <ul>
          <MoviesList movies={trendingMovies} />
          {/* {trendingMovies.map((movie) => (
            <li key={movie.id}>
              <Link to={`${this.props.match.url}/${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          ))} */}
        </ul>
      </>
    );
  }
}

export default Home;
