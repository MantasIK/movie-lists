const apiHelpers = require("../helpers/apiHelpers.js");
const models = require("../models");

module.exports.getGenres = () => apiHelpers.getGenres();

module.exports.getSearch = (id) => apiHelpers.getMovies(id);

module.exports.getSearchAll = (genres) => {
  let allMovies = genres.map((item) => {
    return apiHelpers
      .getMovies(item.id)
      .then((response) => response.data.results);
  });
  return Promise.all(allMovies);
};

module.exports.loveMovie = (req, res) => {};
module.exports.unloveMovie = (req, res) => {};

module.exports.hateMovie = (req, res) => {};
module.exports.unhateMovie = (req, res) => {};
