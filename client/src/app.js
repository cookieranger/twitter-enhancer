import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
// import ToolBar from "@material-ui/core/ToolBar";
import TextField from "@material-ui/core/TextField";
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
      this.setState({ searchResults: result });
    }, console.error);
  };

  render() {
    return (
      <div className="App">
        <AppBar position="static" color="primary">
          {/* <ToolBar> */}
          <TextField
            label="Search..."
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
          {/* </ToolBar> */}
        </AppBar>
        <HashTags hashtags={this.state.hashtags} />
        <SearchResults results={this.state.searchResults} />
      </div>
    );
  }
}

const SearchResults = ({ results }) => {
  return (
    <div className="Results">
      {results.map((result, index) => <Result key={index} result={result} />)}
    </div>
  );
};

const Result = ({}) => {
  return <div className="Result px3 py1 ">Result</div>;
};

const HashTags = ({ hashtags }) => {
  return (
    <div>
      {hashtags.map(hashtag => (
        <Chip key={hashtag.name} label={`${hashtag.name} - ${hashtag.count}`} />
      ))}
    </div>
  );
};

export default App;
