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

module.exports.loveMovie = (item) => models.loveMovie(item);
module.exports.hateMovie = (item) => models.hateMovie(item);

module.exports.getLoved = () => models.getLoved();
module.exports.getHated = () => models.getHated();

module.exports.deleteLovedMovie = (title) => models.deleteLoved(title);
module.exports.deleteHatedMovie = (title) => models.deleteHated(title);
