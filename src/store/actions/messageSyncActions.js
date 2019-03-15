import axios from '../../axios-messages';
import {FETCH_MESSAGE_SUCCESS} from "./messageTypeActions";

export const fetchMessageSuccess = messages => ({type: FETCH_MESSAGE_SUCCESS, messages});

export const fetchMessage = () => {
    return dispatch => {
        return axios.get('/messages').then(
            response => dispatch(fetchMessageSuccess(response.data))
        )
    };
};