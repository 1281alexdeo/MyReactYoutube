import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }
  onInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    this.props.changeTerm(e.target.value);
  }
  render() {
    return (
      <div className="search-bar">
        <input
          name="term"
          placeholder="Search Viral Video"
          value={this.state.term}
          onChange={this.onInputChange.bind(this)}
        />
      </div>
    );
  }
}

export default SearchBar;
