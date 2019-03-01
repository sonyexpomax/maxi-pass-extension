import * as actions from '../actions/loginsActions';

const initialState = {
    allLogins: [],
    isLoading: false,
};

export default function loginsReducer(state = initialState, action) {
    switch (action.type) {
    case actions.GET_LOGINS_REQUEST:
        return { ...state, isLoading: true };
    case actions.GET_LOGINS_ERROR:
        return { ...state, isLoading: false };
    case actions.GET_LOGINS_SUCCESS:
        return {
            ...state,
            isLoading: false,
            allLogins: action.data,
        };
    default:
        return state;
    }
}
