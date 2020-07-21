import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchPoke } from '../../redux/actions/searchAction'

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {}


    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }



  onChange(e) {
    const { value } = e.target;
    this.setState({ name: e.target.value });
    console.log(value)
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.searchPoke(this.state.name)
    console.log('submitted ' + this.state.name)
  }


  render() {

    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group" style={{'margin': '20px'}}>
          <h1>Search Pokemon</h1>
          <input type="text" className="form-control" onChange={this.onChange} aria-describedby="pokeSearch" />
        </div>

        <button type="submit" className="btn btn-primary">search</button>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchPoke: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  searchedPoke: state.searchedPoke.item
})

export default connect(mapStateToProps, { searchPoke })(SearchBar);
