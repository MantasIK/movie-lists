**This is an older app I was working on that calls an api to get a list of best rated movies. Movies can be clicked on to add them to either one of two different lists: Love and Hate**

The lists are stored in a **mongoDB** database.

I had a simple, working version a really long time ago and nostalgia made me want to take it out of the dusty folder and finish whatever _"upgrades"_ I planned on implementing.

It's adorable to see what my code used to look like.

And **api-key** is required from *www.themoviedb.org* and should be exported in an apikey.js file in `/server/helpers` or simply pasted directly in `server/helper/apiHelpers.js` :

```
const axios = require("axios");
const apiKey = require("./apikey"); // or paste your key here instead

module.exports.getGenres = function () {
  return axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
  );
};

module.exports.getMovies = function (id) {
  return axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&vote_count.gte=100&with_genres=${id}`
```
