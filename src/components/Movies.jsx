import React from "react";

class Movies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  }
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
            key={item.id}
            onClick={
              this.props.showFaves
                ? () => this.props.deleteMovieClick(item)
                : () => this.props.saveMovieClick(item)
            }
          >
            <img
              src={
                item.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                  : "https://lh3.googleusercontent.com/97gnjRiv2zIRnDupzfxYFoI-6zlIK3jKgb6KOCDf_tjWkY9epbITdSFIbiKhuccOqQ=w300"
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
