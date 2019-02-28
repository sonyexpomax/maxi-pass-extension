import * as actions from '../actions/userActions';

const initialState = {
    isSignIn: false,
    isLoading: false,
    info: {},
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
    case actions.SIGN_IN_REQUEST:
    case actions.SIGN_OUT_REQUEST:
        return { ...state, isLoading: true };
    case actions.SIGN_IN_SUCCESS:
        return { ...state, isLoading: false, isSignIn: true, info: action.payload };
    case actions.SIGN_OUT_SUCCESS:
        return initialState;
    default:
        return state;
    }
}
