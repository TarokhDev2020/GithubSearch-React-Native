import {GET_LATEST, SEARCH_REPOSITORIES, ADD_TO_FAVORITES, GET_FAVORITES, SET_LOADING, GITHUB_ERROR} from './types';
import axios from 'axios';

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
};

export const getLatest = () => async dispatch => {
    try {
        setLoading();
        const response = await axios.get("https://api.github.com/search/repositories?q=language:swift&order=desc&sort=stars&client_id=[YOUR_CLIENT_ID_HERE]");
        const data = response.data;
        const items = data.items;
        dispatch({
            type: GET_LATEST,
            payload: items
        })
    }
    catch (error) {
        dispatch({
            type: GITHUB_ERROR,
            payload: error
        })
    }
};

export const searchRepositories = (query) => async dispatch => {
    try {
        setLoading();
        const response = await axios.get(`https://api.github.com/search/repositories?q=${query}&order=desc&sort=stars&client_id=[YOUR_CLIENT_ID_HERE]`);
        const data = await response.data;
        const items = data.items;
        dispatch({
            type: SEARCH_REPOSITORIES,
            payload: items
        })
    }
    catch (error) {
        dispatch({
            type: GITHUB_ERROR,
            payload: error
        })
    }
}

export const addToFavorites = (item, callback) => async dispatch => {
    try {
        setLoading();
        const response = await fetch ("http://localhost:5002/favorites", {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        dispatch({
            type: ADD_TO_FAVORITE,
            payload: data
        })
        callback();
    }
    catch (error) {
        dispatch({
            type: GITHUB_ERROR,
            payload: error
        })
    }
};

export const getFavorites = () => async dispatch => {
    try {
        setLoading();
        const response = await axios.get("http://localhost:5002/favorites");
        const data = await response.data;
        dispatch({
            type: GET_FAVORITES,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: GET_FAVORITES,
            payload: error
        })
    }
}