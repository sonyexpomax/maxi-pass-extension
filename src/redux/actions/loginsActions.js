import api from "../../api/apiAuthentications";

export const GET_LOGINS_REQUEST = 'GET_LOGINS_REQUEST';
export const GET_LOGINS_SUCCESS = 'GET_LOGINS_SUCCESS';
export const GET_LOGINS_ERROR = 'GET_LOGINS_ERROR';

export function getLoginsRequest(data) {
    return { type: GET_LOGINS_REQUEST, data };
}

export function getLoginsSuccess(data) {
    return { type: GET_LOGINS_SUCCESS, data };
}

export function getLoginsError(data) {
    return { type: GET_LOGINS_ERROR, data };
}

export function getLogins(data) {
    return (dispatch, getState) => {
        dispatch(getLoginsRequest());
        return api.logins.getAvailableLogins(data)
            .then(({ data, headers, error }) => {
                console.log(data);
                console.log(headers);
                if (data && headers) {
                    dispatch(getLoginsSuccess(data));
                } else {
                    dispatch(getLoginsError(error));
                }
            });
    };
}
