import { SEARCH_POKE_CLOSE, SEARCH_POKE_REQUEST, SEARCH_POKE_SUCCESS, SEARCH_POKE_FAILURE } from '../actions/type';

const initialState = {
    loading: false,
    search: false,
    data: {
        'id': 0,
        'name': '',
        'height': 0,
        'sprites': {
            'default': ''
        },
        'types': [
            {
                'slot': 0,
                'type': {
                    'name': '',
                    'url': ''
                }
            }
        ]

    },

    error: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_POKE_REQUEST:
            console.log('search requested')
            return {
                ...state,
                loading: true,
            }
        case SEARCH_POKE_SUCCESS:
            console.log('search success')
            return {
                loading: false,
                data: action.payload,
                search: true,
                error: ''
            }
        case SEARCH_POKE_FAILURE:
            console.log('search failure')
            return {
                loading: false,
                data: [],
                error: action.payload
            }
        case SEARCH_POKE_CLOSE:
            console.log('search close from reducer')
            return {
                ...state,
                search: false
                
            }

        default: return state;
    }
}

