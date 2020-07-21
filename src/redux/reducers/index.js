import { combineReducers } from 'redux';
import pokeReducer from './pokeReducer';
import searchReducer from './searchReducer';

export default combineReducers({
    searchedPoke: searchReducer,
    fetchedPoke: pokeReducer
});