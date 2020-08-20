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
};
