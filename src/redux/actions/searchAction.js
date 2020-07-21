import { SEARCH_POKE_REQUEST, SEARCH_POKE_SUCCESS, SEARCH_POKE_FAILURE, SEARCH_POKE_CLOSE } from './type';

export const searchPokeRequest = () => {
    return {
        type: SEARCH_POKE_REQUEST
    }
}

const searchPokeSuccess = pokemon => {
    return {
        type: SEARCH_POKE_SUCCESS,
        payload: pokemon
    }
}

const searchPokeFailure = error => {
    return {
        type: SEARCH_POKE_FAILURE,
        payload: error
    }
}
export const searchPokeClose = () => {
    return {
        type: SEARCH_POKE_CLOSE
      
    }
}

export const searchPoke = (search) => {
    return (dispatch) => {
        console.log('searching ' + search)
        dispatch(searchPokeRequest)
        fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
            .then(res => res.json())
            .then(response => {
                const data = response
                dispatch(searchPokeSuccess(data))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(searchPokeFailure(errorMsg))
            })
    };
}

export const closePoke = () => {
    return (dispatch) => {
        console.log('closing search')
        dispatch(searchPokeClose)
    }
}
