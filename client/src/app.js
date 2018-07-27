import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
// import ToolBar from "@material-ui/core/ToolBar";
import Button from "@material-ui/core/Button";

import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

import Chip from "@material-ui/core/Chip";

import { fetchSearch } from "./requests";

const expand = n => [...Array(n).keys()];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      searchResults: expand(20).map(n => ({
        name: n
      })),
      hashtags: expand(10).map(n => ({
        name: `name`,
        count: n * 1000
      }))
    };
  }
  handleChange = event => {
    const { value: searchTerm } = event.target;
    // TODO: debounce the following
    this.setState({ searchTerm });
    fetchSearch({ searchTerm }).then(result => {
      console.log("***search result: ", result);
      // this.setState({ searchResults: result });
    }, console.error);
  };

  render() {
    return (
      <div className="App">
        <AppBar position="static" color="default">
          {/* <ToolBar> */}
          <div className="clearfix">
            <div className="col col-6">
              <Input
                className="my2 mx2"
                placeholder="Search..."
                value={this.state.searchTerm}
                onChange={this.handleChange}
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon color="primary" />
                  </InputAdornment>
                }
              />
            </div>
            {/* <div className="col col-6">
              <Button color="primary" className>
                Search
              </Button>
            </div> */}
          </div>
          {/* </ToolBar> */}
        </AppBar>
        <h3>Hashtags</h3>
        <Hashtags hashtags={this.state.hashtags} />
        <h3>Search Results</h3>
        <SearchResults results={this.state.searchResults} />
      </div>
    );
  }
}

const SearchResults = ({ results }) => {
  return (
    <ul className="Results p1 mt0">
      {results.map((result, index) => <Result key={index} result={result} />)}
    </ul>
  );
};

const Result = ({}) => {
  return <li className="Result px3 py1 ">Result</li>;
};

const Hashtags = ({ hashtags }) => {
  return (
    <div className="p1 clearfix">
      {hashtags.map(hashtag => (
        <div className="col col-3">
          {/* TODO: make these links clickable */}
          <Chip
            className="Hashtag mr2 mb1"
            key={hashtag.name}
            label={`#${hashtag.name} - ${hashtag.count}`}
          />
        </div>
      ))}
    </div>
  );
};

export default App;
