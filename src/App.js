import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchPoke } from './redux/actions/pokeAction'
import './App.css';
import Navbar from './Components/Navbar';
import SearchBar from './Components/SearchBar';
import PokeCard from './Components/PokeCard';
import PokeList from './Components/PokeList';
import Wrapper from './Components/Wrapper'


function App({ searchedPoke }) {


  return (
    <div className="App">
      <Navbar />
      <br />
      <SearchBar />
      <br />
      <Wrapper>
        { !searchedPoke.search ? <PokeList />  :  <PokeCard /> }
      </Wrapper>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    pokeData: state.fetchedPoke.data,
    searchedPoke: state.searchedPoke
  }
}


const mapDispatchToProps = dispatch => {
  return {
    fetchPoke: () => dispatch(fetchPoke())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


