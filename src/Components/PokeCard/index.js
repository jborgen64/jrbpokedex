import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closePoke } from '../../redux/actions/searchAction'
import { fetchPoke } from '../../redux/actions/pokeAction'
import './pokeCard.css'


class PokeCard extends Component {
  
  
  render(props) {
    
    const types = this.props.searchedPoke.types[0].type.name

    return (

      <div className="card main-card">
        <div className="row no-gutters">
          <img src={this.props.searchedPoke.sprites.front_default} className="card-img-top pokeCard-img" alt="..." />
          <div className="tite-card card">
            <h1 className="card-title">{this.props.searchedPoke.name} </h1>
            <h5 className="card-text">number: {this.props.searchedPoke.id} </h5>
            <h5 className="card-text">type: {types} </h5>
            <h5 className="card-text">height: {this.props.searchedPoke.height} </h5>
          </div>
          <div className="stats-card card">
            <h5 className="card-text">{this.props.searchedPoke.stats[0].stat.name}: {this.props.searchedPoke.stats[0].base_stat}</h5>
            <h5 className="card-text">{this.props.searchedPoke.stats[1].stat.name}: {this.props.searchedPoke.stats[1].base_stat}</h5>
            <h5 className="card-text">{this.props.searchedPoke.stats[2].stat.name}: {this.props.searchedPoke.stats[2].base_stat}</h5>
            <h5 className="card-text">{this.props.searchedPoke.stats[3].stat.name}: {this.props.searchedPoke.stats[3].base_stat}</h5>
            <h5 className="card-text">{this.props.searchedPoke.stats[4].stat.name}: {this.props.searchedPoke.stats[4].base_stat}</h5>
            <h5 className="card-text">{this.props.searchedPoke.stats[5].stat.name}: {this.props.searchedPoke.stats[5].base_stat}</h5>
          </div>
        </div>
        <button className="btn btn-primary" onClick={() => window.location.reload(false)}>close</button>
      </div>



    )
  }
}



PokeCard.propTypes = {
  // closePoke: PropTypes.func.isRequired
  // searchedPoke: PropTypes.any.isRequired
}

const mapStateToProps = state => ({
  searchedPoke: state.searchedPoke.data
})


const mapDispatchToProps = dispatch => {
  return {
  fetchPoke: (url) => dispatch(fetchPoke(url)),
  closePoke: () => dispatch(closePoke())
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(PokeCard);
