import {GET_FAVORITES, SEARCH_REPOSITORIES, ADD_TO_FAVORITES, GET_LATEST, SET_LOADING, GITHUB_ERROR} from '../actions/types';

const initialState = {
    latest: null,
    repos: null,
    favorites: null,
    loading: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {

        case SET_LOADING:
            return {
                ...state,
                loading: true
            }

        case GET_LATEST:
            return {
                ...state,
                latest: action.payload,
                loading: false,
                error: null
            }

        case SEARCH_REPOSITORIES:
            return {
                ...state,
                repos: action.payload,
                loading: false,
                error: null
            }
            
        case ADD_TO_FAVORITES:
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
                loading: false,
                error: null
            }
            
        case GET_FAVORITES:
            return {
                ...state,
                favorites: action.payload,
                loading: false,
                error: null
            }    
            
        case GITHUB_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }    

        default:
            return state
    }
};