import React, { Component } from "react";
import _ from "lodash";
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
import Tweet from "./models/tweet";

const expand = n => [...Array(n).keys()];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      searchResults: [],
      hashtags: {}
    };
    this.handleSearch = _.debounce(searchTerm => {
      fetchSearch({ searchTerm }).then(result => {
        console.log("***search reslult: ", result);
        this.setState({
          searchResults: result.map(tweetJson => new Tweet(tweetJson)),
          hashtags: _
            .flatten(result.map(r => r.hashtags))
            .reduce((accu, tag) => {
              accu[tag] = accu[tag] ? accu[tag] + 1 : 1;
              return accu;
            }, {})
        });
      }, console.error);
    }, 500);
    this.handleSearch(""); // initial call
  }

  handleChange = event => {
    const { value: searchTerm } = event.target;
    // TODO: debounce the following
    this.setState({ searchTerm });
    this.handleSearch(searchTerm);
  };

  handleClickHashTag = tag => {
    this.setState({ searchTerm: tag });
    this.handleSearch(tag);
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
                value={this.state.tag}
                onChange={this.handleChange}
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon color="primary" />
                  </InputAdornment>
                }
              />
            </div>
          </div>
          {/* </ToolBar> */}
        </AppBar>
        <h3 className="px2 py1">Hashtags</h3>
        <Hashtags
          hashtags={this.state.hashtags}
          onClickHashTag={this.handleClickHashTag}
        />

        <SearchResults
          results={this.state.searchResults}
          onClickHashTag={this.handleClickHashTag}
        />
      </div>
    );
  }
}

export default App;
