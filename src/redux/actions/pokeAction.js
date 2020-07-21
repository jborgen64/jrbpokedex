import {  FETCH_POKE_REQUEST, FETCH_POKE_SUCCESS, FETCH_POKE_FAILURE } from './type';


export const fetchPokeRequest = () => {
    return {
        type: FETCH_POKE_REQUEST
    }
}

const fetchPokeSuccess = pokemon => {
    return {
        type: FETCH_POKE_SUCCESS,
        payload: pokemon
    }
}

const fetchPokeFailure = error => {
    return {
        type: FETCH_POKE_FAILURE,
        payload: error
    }
}

export const fetchPoke = (url) => {
    return (dispatch) => {
        dispatch(fetchPokeRequest)
        fetch(url)
            .then(res => res.json())
            .then(response => { 
                const data = response
                dispatch(fetchPokeSuccess(data))
             })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchPokeFailure(errorMsg))
            })
    };
}

