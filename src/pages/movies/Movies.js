import React, { Component } from "react";
import api from "../../services/api";

class Movies extends Component {
  state = {
    query: "",
  };
  handleSubmit = () => {
    console.log("hello from sibmit");
    api.getMovieByName(this.state.query).then((res) => console.log(res));
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    // const { query } = this.state;
    // console.log(this.props);
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" name="query" onChange={this.handleChange} />
          </label>
          <button type="button">Search</button>
        </form>
      </>
    );
  }
}

export default Movies;
