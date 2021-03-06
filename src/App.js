import React from "react";
import Search from "./components/Search.jsx";
import Movies from "./components/Movies.jsx";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [{ deway: "movies" }],
      loved: [{ deway: "loved" }],
      hated: [{ deway: "hated" }],
      showMovies: true,
      currentList: "Love",
    };
  }

  getMovies = (id) => {
    axios.get("/search", { params: { id: id } }).then((response) => {
      if (Array.isArray(response.data)) {
        let allMovies = [];
        response.data.forEach((arr) =>
          arr.forEach((item) => allMovies.push(item))
        );
        this.setState({ movies: allMovies });
      } else this.setState({ movies: response.data.results });
    });
  };
  changeList = (e) => {
    this.setState({ currentList: e.target.value });
  };
  showList = () => {
    this.setState({ showMovies: !this.state.showMovies });
  };
  getLoved = () => {
    axios
      .get("/love")
      .then((response) => this.setState({ loved: response.data }));
  };
  getHated = () => {
    axios
      .get("/hate")
      .then((response) => this.setState({ hated: response.data }));
  };
  saveMovie = (item) => {
    if (this.state.currentList === "Love")
      axios.post("/love", item).then(() => this.getLoved());
    else axios.post("/hate", item).then(() => this.getHated());
  };
  removeMovieFromList = (item) => {
    if (this.state.currentList === "Love") {
      axios
        .delete("/love", { data: { movie: item } })
        .then(() => this.getLoved());
    } else {
      axios
        .delete("/hate", { data: { movie: item } })
        .then(() => this.getHated());
    }
  };

  /*************************************************************************** */

  componentDidMount() {
    this.getMovies(42069);
    this.getLoved();
    this.getHated();
  }

  /*************************************************************************** */

  render() {
    return (
      <div className="app">
        <header className="navbar">
          <h1>Movie Lists</h1>
        </header>

        <div className="main">
          <Search
            getMovies={this.getMovies}
            handleList={this.changeList}
            showList={this.showList}
            showMovies={this.state.showMovies}
          />
          <Movies
            movies={
              this.state.showMovies
                ? this.state.movies
                : this.state.currentList === "Love"
                ? this.state.loved
                : this.state.hated
            }
            showMovies={this.state.showMovies}
            saveMovie={this.saveMovie}
            removeMovie={this.removeMovieFromList}
          />
        </div>
      </div>
    );
  }
}

export default App;
