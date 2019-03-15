import {FETCH_MESSAGE_SUCCESS} from "../actions/messageTypeActions";

const initialState = {
    messages: null
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MESSAGE_SUCCESS:
            return {...state, messages: action.messages};
        default:
            return state;
    }
};

export default messageReducer;