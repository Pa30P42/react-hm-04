import React, { Component } from "react";
import api from "../../../services/api";
import { Link } from "react-router-dom";
// import getQueryParams from "../../../services/qs";

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

  // componentDidUpdate() {
  //   console.log(this.props);
  // const params = getQueryParams(this.props.location.search);
  // const { query } = params;
  // console.log(query);
  // }

  goBackFn = () => {
    if (this.props.location.state && this.props.location.state.from) {
      console.log("yes");
      this.props.history.push(this.props.location.state.from.pathname);
    }
  };
  render() {
    const {
      original_title,
      vote_count,
      overview,
      backdrop_path,
    } = this.state.movieInfo;

    return (
      <>
        <button type="button" onClick={this.goBackFn}>
          Go back
        </button>
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
              <Link
                to={{
                  pathname: `${this.props.match.url}/cast`,
                  state: { from: this.props.location },
                }}
              >
                Cast
              </Link>
            </li>
            <li>
              <Link to={`${this.props.match.url}/reviews`}>Reviews</Link>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default OneMovie;
