const mongoose = require("mongoose");
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect("mongodb://localhost:27017/movies", {
    useNewUrlParser: true,
  });
}

const db = mongoose.connection;

mongoose.Promise = Promise;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to db...");
});

const loveSchema = new mongoose.Schema({
  original_title: { type: String, unique: true },
  poster_path: String,
  popularity: Number,
  release_date: String,
});

const hateSchema = new mongoose.Schema({
  original_title: { type: String, unique: true },
  poster_path: String,
  popularity: Number,
  release_date: String,
});

module.exports = mongoose.connection;
module.exports = mongoose.model("Loved", loveSchema);
module.exports = mongoose.model("Hated", hateSchema);
