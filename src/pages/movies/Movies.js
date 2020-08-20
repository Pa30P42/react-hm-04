import React, { Component } from "react";

class Movies extends Component {
  render() {
    // console.log(this.props);
    return (
      <>
        <form>
          <label>
            <input type="text" />
          </label>
          <button type="button">Search</button>
        </form>
      </>
    );
  }
}

export default Movies;
