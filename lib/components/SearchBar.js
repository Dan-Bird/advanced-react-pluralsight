import React, { Component } from 'react';
import debounce from 'lodash.debounce';

class SearchBar extends Component {
  state = {
    searchTerm: '',
  };
  doSearch = debounce(() => {
    this.props.doSearch(this.state.searchTerm);
  }, 300);
  handleSearch = event => {
    this.setState({ searchTerm: this.event.value }, () => {
      this.doSearch();
    });
  };
  render() {
    return (
      <input
        type="search"
        placeholder="Enter search here"
        onChange={this.handleSearch}
        value={this.state.searchTerm}
      />
    );
  }
}

export default SearchBar;
