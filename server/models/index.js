const { Loved, Hated } = require("../database");

module.exports.getLoved = () => Loved.find();

module.exports.getHated = () => Hated.find();

module.exports.loveMovie = (data) =>
  Loved.create({
    title: data.title,
    poster_path: data.poster_path,
    popularity: data.popularity,
    release_date: data.release_date,
  });

module.exports.hateMovie = (data) =>
  Hated.create({
    title: data.title,
    poster_path: data.poster_path,
    popularity: data.popularity,
    release_date: data.release_date,
  });

module.exports.deleteLoved = (title) => Loved.deleteOne({ title: title });
module.exports.deleteHated = (title) => Hated.deleteOne({ title: title });
