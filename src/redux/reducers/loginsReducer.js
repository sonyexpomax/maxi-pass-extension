import * as actions from '../actions/loginsActions';

const initialState = {
    allLogins: {
        'facebook.com': { id: '111', site: 'facebook.com'},
        'go.discoverydb.com': { id: '111', site: 'go.discoverydb.com'},
        'stackoverflow.com': { id: '111', site: 'stackoverflow.com'},
    },
};

export default function loginsReducer(state = initialState, action) {
    switch (action.type) {
    case actions.SET_ALL_LOGINS:
        return state;
    default:
        return state;
    }
}
