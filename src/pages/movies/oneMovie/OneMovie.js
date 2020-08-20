import React, { Component } from "react";
import api from "../../../services/api";
import { Link } from "react-router-dom";

class OneMovie extends Component {
  state = {
    id: this.props?.match.params?.id,
    movieInfo: {},
  };
  componentDidMount() {
    api
      .getOneMovie(this.state.id)
      .then((res) => this.setState({ movieInfo: { ...res.data } }));
  }
  render() {
    const {
      original_title,
      vote_count,
      overview,
      backdrop_path,
    } = this.state.movieInfo;
    console.log(this.props);
    return (
      <>
        <button type="button">Go back</button>
        <div>
          {backdrop_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
              alt="/"
              width="200"
            />
          )}

          <h3>{original_title}</h3>
          <p>{vote_count}</p>
          <h4>Overview</h4>
          <p>{overview}</p>
        </div>
        <div>
          <ul>
            <li>
              <Link to={`${this.props.location.pathname}/cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`${this.props.location.pathname}/reviews`}>
                Reviews
              </Link>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default OneMovie;
