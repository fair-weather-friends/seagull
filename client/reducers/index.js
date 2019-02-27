/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description simply a place to combine reducers
 *
 * ************************************
 */

import { combineReducers } from 'redux';
import reducer from './reducer';
import messageReducer from './messageReducer'

export default combineReducers({
    reducer,
    messageReducer
});
