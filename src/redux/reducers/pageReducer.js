import * as actions from '../actions/pageActions';

const initialState = {
    info: {},
};

export default function pageReducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
    case actions.SET_INFO:
        return { ...state, info: action.data };
    default:
        return state;
    }
}
