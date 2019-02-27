import * as types from '../constants/actionTypes';

const initialState = {
    messages: [],
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_MESSAGES:
            return {
                ...state,
                messages: action.payload
            }

        case types.POST_MESSAGE:
            const messages = state.messages.slice()
            const newMessage = action.payload;
            messages.push(newMessage)
            return {
                ...state,
                messages
            }
        case types.ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        default:
            return state;
    }
};

export default messageReducer;