const apiHelpers = require("../helpers/apiHelpers.js");

module.exports = {
  getGenres: () => apiHelpers.getGenres(),
  getSearch: (id) => apiHelpers.getMovies(id),
  getSearchAll: (genres) => {
    let allMovies = genres.map((item) => {
      return apiHelpers
        .getMovies(item.id)
        .then((response) => response.data.results);
    });
    return Promise.all(allMovies);
  },
  saveMovie: (req, res) => {},
  deleteMovie: (req, res) => {},
};
