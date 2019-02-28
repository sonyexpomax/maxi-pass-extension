import api from '../../api/apiAuthentications';

export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR';

export const SIGN_OUT_REQUEST = 'SIGN_OUT_REQUEST';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_ERROR = 'SIGN_OUT_ERROR';

export function signInRequest() {
    return { type: SIGN_IN_REQUEST };
}

export function signInError() {
    return { type: SIGN_IN_ERROR };
}

export function signInSuccess(data) {
    return { type: SIGN_IN_SUCCESS, payload: data };
}

export function signOutRequest() {
    console.log('signOutRequest');
    return { type: SIGN_OUT_REQUEST, payload: {} };
}

export function signOutError() {
    return { type: SIGN_OUT_ERROR };
}

export function signOutSuccess() {
    return { type: SIGN_OUT_SUCCESS };
}

export function signIn(data) {
    return (dispatch, getState) => {
        dispatch(signInRequest());
        return api.authentications.signIn(data)
            .then(({ data, headers, error }) => {
                console.log(data);
                console.log(headers);
                if (data && headers) {
                    dispatch(signInSuccess(data));
                } else {
                    dispatch(signInError());
                }
            });
    };
}
export function signOut(data) {
    console.log('out');
    return (dispatch, getState) => {
        dispatch(signOutRequest());
        return api.authentications.signOut(data)
            .then(({ data, headers, error }) => {
                if (data && headers) {
                    dispatch(signOutSuccess());
                } else {
                    dispatch(signOutError());
                }
            });
    };
}
