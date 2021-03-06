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
app.get("/love", controller.getLoved);

app.post("/hate", controller.hateMovie);
app.get("/hate", controller.hateMovie);

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 8080, () => {
  console.log("*********Server Running**********");
});
