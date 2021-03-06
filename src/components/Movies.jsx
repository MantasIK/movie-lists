import React from "react";
import spinner from "../spinner.gif";

class Movies extends React.Component {
  componentDidMount() {
    this.setState({
      movies: this.props.movies,
    });
  }
  render() {
    return (
      <ul className="movies">
        {this.props.movies.map((item) => (
          <li
            className="movie_item"
            onClick={
              this.props.showMovies
                ? () => this.props.saveMovie(item)
                : () => this.props.removeMovie(item)
            }
          >
            <img
              src={
                item.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                  : spinner
              }
            />
            <div className="movie_description">
              <h2>{item.title}</h2>
              <section className="movie_details">
                <div className="movie_year">
                  <span className="title">Year</span>
                  <span>
                    {item.release_date ? item.release_date : "Nobody Knows"}
                  </span>
                </div>
                <div className="movie_rating">
                  <span className="title">Rating</span>
                  <span>{item.popularity}</span>
                </div>
              </section>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default Movies;
