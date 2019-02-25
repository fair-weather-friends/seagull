/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

export const signUp = data => (dispatch) => {
    fetch('/api/signup', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: data.name.value,
            username: data.username.value,
            password: data.password.value
        })
    }).then(res => res.json())
        .then(jsonData => {
            dispatch({
                type: types.SET_USER,
                payload: jsonData,
            });
        });
}


export const getWeather = city => (dispatch) => {
    fetch('/api/weather', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ city })
    }).then(res => res.json())
        .then(resp => JSON.parse(resp))
        .then(jsonData => {
            dispatch({
                type: types.LOAD_WEATHER,
                payload: jsonData,
            });
        });
}

export const updateCurrentCity = data => ({
    type: types.UPDATE_CITY,
    payload: data,
});