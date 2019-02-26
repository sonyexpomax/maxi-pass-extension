import * as actions from '../actions/userActions';

const initialState = {
    isSignIn: false,
    isLoading: false,
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
    case actions.SIGN_IN_REQUEST:
        return { ...state, isLoading: true };
    case actions.SIGN_IN_SUCCESS:
        return { ...state, isLoading: false, isSignIn: true };
    default:
        return state;
    }
}
