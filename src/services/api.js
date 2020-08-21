import axios from "axios";

export default {
  async getPopularMovies() {
    try {
      const response = axios.get(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=6ec0f3fba1c42a32b5dafc2780b519a4"
      );
      return response;
      //   console.log(response);
    } catch (error) {
      throw new Error(error);
    }
  },
  async getOneMovie(id) {
    try {
      const response = axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=6ec0f3fba1c42a32b5dafc2780b519a4&language=en-US`
      );
      return response;
      //   console.log(response);
    } catch (error) {
      throw new Error(error);
    }
  },
  async getMovieCast(id) {
    try {
      const response = axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=6ec0f3fba1c42a32b5dafc2780b519a4`
      );
      return response;
      //   console.log(response);
    } catch (error) {
      throw new Error(error);
    }
  },
  async getMovieReview(id) {
    try {
      const response = axios.get(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=6ec0f3fba1c42a32b5dafc2780b519a4&language=en-US&page=1`
      );
      return response;
      //   console.log(response);
    } catch (error) {
      throw new Error(error);
    }
  },
  async getMovieByName(query) {
    try {
      const response = axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=6ec0f3fba1c42a32b5dafc2780b519a4&language=en-US&query=${query}&page=1&include_adult=false`
      );
      return response;
      //   console.log(response);
    } catch (error) {
      throw new Error(error);
    }
  },
};
