import React from "react";
import axios from "axios";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      lists: ["Love", "Hate"],
      selection: 42069,
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleList=this.handleList.bind(this)
  }
  //********************************************************* */
  handleChange = (e) => {
    this.props.getMovies(e.target.value);
    this.setState({ selection: e.target.value });
  };

  //********************************************************* */
  componentDidMount() {
    axios.get("/genres").then((response) => {
      response.data.genres.unshift({ id: 42069, name: "All Genres" });
      this.setState({ genres: response.data.genres });
    });
  }

  render() {
    return (
      <div className="search">
        <button onClick={this.props.showList}>Show List</button>
        <select onChange={this.props.handleList}>
          {this.state.lists.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>

        <br />
        <br />

        <select onChange={this.handleChange}>
          {this.state.genres.map((item) => (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        <br />
        <br />
      </div>
    );
  }
}

export default Search;
