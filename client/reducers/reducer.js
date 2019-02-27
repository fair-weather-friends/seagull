/**
 * ************************************
 *
 * @module  reducer
 * @author
 * @date
 * @description reducer for the app
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = {
    currentCity: 'bozeman',
    currentTemp: 0,
    gradientStart: '#44bbea',
    gradientEnd: '#a6e7f6',
    loggedIn: false,
    user: 'Rob'
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_USER:
            return {
                ...state,
                user: action.payload,
                loggedIn: true
            };
        case types.UPDATE_CITY:
            return {
                ...state,
                currentCity: action.payload
            };

        case types.LOAD_WEATHER:
            let s;
            let e;
            const curTemp = Math.floor(action.payload.main.temp);
            if (curTemp < 32) {
                s = '#483edc'
                e = '#a4a7f0';
            } else if (curTemp > 32 && curTemp <= 45) {
                s = '#3e75dc'
                e = '#a4c6f0';
            } else if (curTemp > 45 && curTemp <= 55) {
                s = '#3eccdc'
                e = '#a4f0f0';
            } else if (curTemp > 55 && curTemp <= 65) {
                s = '#3edc98'
                e = '#a4f0c7';
            } else if (curTemp > 65 && curTemp < 75) {
                s = '#4edc3e'
                e = '#b3f0a4';
            } else if (curTemp > 75 && curTemp < 85) {
                s = '#dcd93e'
                e = '#f0e7a4';
            } else {
                s = '#dc923e'
                e = '#f0c5a4';
            }
            return {
                ...state,
                currentTemp: curTemp,
                gradientStart: s,
                gradientEnd: e
            };

        default:
            return state;
    }
};

export default reducer;