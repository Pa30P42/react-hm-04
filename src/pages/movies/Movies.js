import React, { Component } from "react";
import api from "../../services/api";
import MoviesList from "../home/moviesList/MoviesList";
import getQueryParams from "../../services/qs";

class Movies extends Component {
  state = {
    query: "",
    queryMovies: [],
  };

  // componentDidUpdate() {
  //   const params = getQueryParams(this.props.location.search);
  //   const { query } = params;
  //   console.log("query", query);
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    api
      .getMovieByName(this.state.query)
      .then((res) => this.setState({ queryMovies: res.data.results }));
    console.log("this.props", this.props);
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${this.state.query}`,
    });
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
