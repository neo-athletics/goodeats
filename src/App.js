import React from "react";
import "./App.css";
import BusinessList from "./components/BusinessList/BusinessList.js";
import SearchBar from "./components/SearchBar/SearchBar.js";
import Yelp from "./util/Yelp";
const dotenv = require("dotenv").config();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { businesses: [] };
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    console.log("searching yelp with" + term + "," + location + "," + sortBy);

    Yelp.search(term, location, sortBy).then((businesses) => {
      try {
        this.setState({ businesses: businesses });
        console.log(this.state.businesses);
      } catch (error) {
        if (
          this.state.businesses.length === 0 ||
          this.state.businesses === undefined
        ) {
          this.setState({ businesses: "empty" });
        }
      }
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Good Eats</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;
