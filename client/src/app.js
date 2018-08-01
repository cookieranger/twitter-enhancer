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

const extractHashtags = results =>
  _.flatten(results.map(r => r.hashtags)).reduce((accu, tag) => {
    accu[tag] = accu[tag] ? accu[tag] + 1 : 1;
    return accu;
  }, {});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      searchResults: [],
      hashtags: {}
    };
    this.handleSearch = _.debounce(searchTerm => {
      fetchSearch({ searchTerm }).then(results => {
        this.setState({
          searchResults: results.map(tweetJson => new Tweet(tweetJson)),
          hashtags: extractHashtags(results)
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
    tag = tag.slice(1);
    this.setState({ searchTerm: tag });
    this.handleSearch(tag);
  };

  render() {
    return (
      <div className="App">
        <AppBar position="static" color="default">
          <div className="py2 px3">
            <div className="">
              <Input
                className="stretch-x"
                placeholder="Search Star Wars Tweets with 1 or more keywords..."
                value={this.state.searchTerm}
                onChange={this.handleChange}
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon color="primary" />
                  </InputAdornment>
                }
              />
            </div>
          </div>
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
