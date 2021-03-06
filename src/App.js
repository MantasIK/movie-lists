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

    // this.getMovies = this.getMovies.bind(this);
    // this.handleit = this.handleit.bind(this);
    // this.changeList = this.changeList.bind(this);
    // this.showList = this.showList.bind(this);
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
  handleit = () => {
    console.log(this.state.movies);
    console.log(this.state.currentList);
  };
  saveMovie = (item) => {
    if (this.state.currentList === "Love")
      axios.post("/love", item).then((response) => console.log(response.data));
    else axios.post("/hate", item).then(() => {});
  };
  // removeMovieFromList =() => {
  //   if (this.state.currentList === "Love")
  // }

  getLoved = () => {
    axios
      .get("/love")
      .then((response) => this.setState({ loved: response.data }));
  };

  /*************************************************************************** */

  componentDidMount() {
    this.getMovies(42069);
  }

  /*************************************************************************** */

  render() {
    return (
      <div className="app">
        <header className="navbar">
          <h1>Movie Catalog</h1>
        </header>

        <div className="main">
          <Search
            getMovies={this.getMovies}
            handleList={this.changeList}
            showList={this.showList}
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
          />
        </div>
      </div>
    );
  }
}

export default App;
