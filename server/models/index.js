const { Loved, Hated } = require("../database");

module.exports.getLoved = () => Loved.find();

module.exports.getHated = () => Hated.find();

module.exports.loveMovie = (data) => {
  return Loved.create({
    original_title: data.movie.original_title,
    poster_path: data.movie.poster_path,
    popularity: data.movie.popularity,
    release_date: data.movie.release_date,
  });
};

module.exports.hateMovie = (data) => {
  return Hated.create({
    original_title: data.movie.original_title,
    poster_path: data.movie.poster_path,
    popularity: data.movie.popularity,
    release_date: data.movie.release_date,
  });
};

module.exports.deleteLoved = () => Loved.deleteOne({ original_title: title });

module.exports.deleteHated = () => Hated.deleteOne({ original_title: title });
