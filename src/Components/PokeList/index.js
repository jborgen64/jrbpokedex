import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchPoke } from '../../redux/actions/pokeAction'
import { searchPoke } from '../../redux/actions/searchAction';
import './pokeList.css'

function PokeList({ pokeData, fetchPoke, searchPoke }) {

  useEffect(() => {
    fetchPoke('https://pokeapi.co/api/v2/pokemon');
  }, [])

  const handleNextClick = () => {
    fetchPoke(pokeData.next)
  }

  const handlePrevClick = () => {
    if (!pokeData.previous) return;
    fetchPoke(pokeData.previous)
  }

  return pokeData.loading ? (
    <h2>Loading...</h2>
  ) : pokeData.error ? (
    <h2>{pokeData.error}</h2>
  ) : (
        <div>
          <button type="submit" className="btn btn-primary" onClick={handlePrevClick}>prev</button>
          <button type="submit" className="btn btn-primary" onClick={handleNextClick}>next</button>
          <div>{pokeData && pokeData.results && pokeData.results.map(poke =>
            <div className="card mb-3" style={{ "width": "300px", "height": "120px" }} onClick={() => searchPoke(poke.name)} key={poke.name}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={`https://img.pokemondb.net/sprites/black-white/normal/${poke.name}.png`} className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p className="card-body">{poke.name} </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          </div>
        </div>
      )
}


const mapStateToProps = state => {
  return {
    pokeData: state.fetchedPoke.data,
    searchedPoke: state.searchedPoke.data

  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPoke: (url) => dispatch(fetchPoke(url)),
    searchPoke: (search) => dispatch(searchPoke(search))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokeList)