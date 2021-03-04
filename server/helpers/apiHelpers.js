const axios = require("axios");

module.exports.getGenres = function() {
  return axios.get(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=0c00aa7a4d2e50f65c74d3176f797345&language=en-US"
  );
};

module.exports.getMovies = function(id) {
  return axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=0c00aa7a4d2e50f65c74d3176f797345&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&vote_count.gte=100&with_genres=${id}`
  );
};
