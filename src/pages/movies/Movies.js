import React, { Component } from "react";
import api from "../../services/api";
import MoviesList from "../home/moviesList/MoviesList";

class Movies extends Component {
  state = {
    query: "",
    queryMovies: [],
  };
  handleSubmit = (e) => {
    e.preventDefault();
    api
      .getMovieByName(this.state.query)
      .then((res) => this.setState({ queryMovies: res.data.results }));
    this.setState({ query: "" });
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { queryMovies } = this.state;
    // console.log(this.props);
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              value={this.state.query}
              name="query"
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Search</button>
        </form>
        <div>
          <ul>
            <MoviesList movies={queryMovies} />
          </ul>
        </div>
      </>
    );
  }
}

export default Movies;
