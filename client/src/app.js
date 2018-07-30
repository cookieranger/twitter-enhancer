import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
// import ToolBar from "@material-ui/core/ToolBar";
import Button from "@material-ui/core/Button";

import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

// components
import Hashtags from "./components/Hashtags";
import SearchResults from "./components/SearchResults";

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
          <div className="py2 px3">
            <div className="">
              <Input
                className="stretch-x"
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
            {/* TODO: remove */}
            {/* <div className="col col-6">
              <Button color="primary" className>
                Search
              </Button>
            </div> */}
          </div>
          {/* </ToolBar> */}
        </AppBar>
        <h3 className="px2 py1">Hashtags</h3>
        <Hashtags hashtags={this.state.hashtags} />

        <SearchResults results={this.state.searchResults} />
      </div>
    );
  }
}

export default App;
