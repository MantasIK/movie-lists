const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const controller = require("./controllers/movieController");
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + "build")));

app.get("/genres", function (req, res) {
  controller.getGenres().then((response) => res.send(response.data));
});

app.get("/search", function (req, res) {
  let id = req.url.split("=")[1];

  if (id === "42069") {
    controller
      .getGenres()
      .then((response) =>
        controller
          .getSearchAll(response.data.genres)
          .then((second) => res.send(second))
      );
  } else controller.getSearch(id).then((response) => res.send(response.data));
});

app.post("/save", function (req, res) {
  //save movie as favorite into the database
});

app.post("/delete", function (req, res) {
  //remove movie from favorites into the database
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 8080, () => {
  console.log("*******************");
});
