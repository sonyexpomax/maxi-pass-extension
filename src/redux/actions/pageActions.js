export const SET_INFO = 'SET_INFO';
export const CHANGE_URL = 'CHANGE_URL';

export function setInfo(data) {
    return { type: SET_INFO, data };
}

export function changeUrl(data) {
    return { type: CHANGE_URL, data };
}
