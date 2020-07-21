import { FETCH_POKE_FAILURE, FETCH_POKE_SUCCESS, FETCH_POKE_REQUEST } from '../actions/type';

const initialState = {
    loading: false,
    data: [],
    pokeIndex: '',
    pokeImage: '',
    error: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POKE_REQUEST:
            console.log('fetch requested')
            return {
                ...state,
                loading: true
            }
        case FETCH_POKE_SUCCESS:
            console.log('fetch success')
            return {
                loading: false,
                data: action.payload,
                error: ''
            }
        case FETCH_POKE_FAILURE:
            console.log('fetch failure')
            return {
                loading: false,
                data: [],
                error: action.payload
            }

        default: return state;
    }
}

