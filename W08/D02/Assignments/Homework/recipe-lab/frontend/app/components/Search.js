import React from 'react';
import Searched from './Searched';
import axios from 'axios';

const Search = React.createClass({
  getInitialState: function() {
    return {
      activeSearch: false,
      searchTerm: '',
      ajaxReturn: []
    }
  },
  getSearch: function() {
    var searchValue = document.getElementById('search-box').value;
    this.setState({
      searchTerm: searchValue
    });
    if (this.state.searchTerm) {
      this.setState({
        activeSearch: true
      });
    }
  },
  doSearch: function() {
    axios.get('http://localhost:3000/recipes/' + this.state.searchTerm)
    .then(function(response) {
      console.log("Response.data:", response.data);
      this.setState({
        ajaxReturn: response.data
      });
    }.bind(this))
    .catch(function(err) {
      console.warn("Error");
      return err;
    })
  },
  render: function() {
    return (
      <div>
        <h3>Search recipe by name</h3>
        <form>
          <label>Name:&nbsp;
            <input type="text" placeholder="i.e. Hamburger" id="search-box" onChange={this.getSearch}></input>
          </label>
          <br /><br />
          <button type="button" onClick={this.doSearch}>Search</button>
        </form>
        <br />
        <hr />
        <Searched active={this.state.activeSearch} search={this.state.ajaxReturn} />
      </div>
    )
  }
});


export default Search;
