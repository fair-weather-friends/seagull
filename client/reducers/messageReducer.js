import * as types from '../constants/actionTypes';

const initialState = {
    messages: [
        {
        user: 'Rob',
        id: '0',
        content: 'Yo!'
        },
        {
        user: 'Jay',
        id: '1',
        content: 'Hey'
        },
        {
        user: 'Tristan',
        id: '2',
        content: 'Hey fellas'
        },
        {
        user: 'Kenny',
        id: '3',
        content: "What's up?"
        }
    ],
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_MESSAGES:
            return {
                ...state,
                messages: action.payload
            }

        case types.ADD_MESSAGE:
            const messages = state.messages.slice()
            const newMessage = {author: 'Rob', id: '4', content: action.payload}
            messages.push(newMessage)
            return {
                ...state,
                messages
            }

        default:
            return state;
    }
};

export default messageReducer;