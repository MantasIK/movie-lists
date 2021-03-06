const mongoose = require("mongoose");
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose
    .connect("mongodb://localhost:27017/movies", {
      useNewUrlParser: true,
    })
    .then(console.log("*************MONGO CONNECTED**************"));
}

const loveSchema = new mongoose.Schema({
  title: { type: String, unique: true },
  poster_path: String,
  popularity: Number,
  release_date: String,
});

const hateSchema = new mongoose.Schema({
  title: { type: String, unique: true },
  poster_path: String,
  popularity: Number,
  release_date: String,
});

module.exports = mongoose.connection;
module.exports.Loved = mongoose.model("Loved", loveSchema);
module.exports.Hated = mongoose.model("Hated", hateSchema);
