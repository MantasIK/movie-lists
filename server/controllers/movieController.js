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
module.exports.getLoved = (req, res) =>
  models.getLoved().then((data) => res.send(data));

module.exports.unloveMovie = (req, res) => {};

module.exports.hateMovie = (req, res) => models.hateMovie(req.body);

module.exports.getHated = (req, res) =>
  models.getHated().then((data) => res.send(data));

module.exports.unhateMovie = (req, res) => {};
