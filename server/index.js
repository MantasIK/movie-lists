const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const controller = require("./controllers/movieController");
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + "build")));

app.get("/genres", (req, res) => {
  controller.getGenres().then((response) => res.send(response.data));
});

app.get("/search", (req, res) => {
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

app.post("/love", (req, res) => {
  controller.loveMovie(req.body).then(() => res.sendStatus(201));
});
app.get("/love", (req, res) => {
  controller.getLoved().then((data) => res.send(data));
});
app.delete("/love", (req, res) => {
  controller
    .deleteLovedMovie(req.body.movie.title)
    .then(() => res.sendStatus(201));
});

app.post("/hate", (req, res) => {
  controller.hateMovie(req.body).then(() => res.sendStatus(201));
});
app.get("/hate", (req, res) => {
  controller.getHated().then((data) => res.send(data));
});
app.delete("/hate", (req, res) => {
  controller
    .deleteHatedMovie(req.body.movie.title)
    .then(() => res.sendStatus(201));
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 8080, () => {
  console.log("*********Server Running**********");
});
