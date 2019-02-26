export const LISTS_REFRESH_START = 'LISTS_REFRESH_START';
export const LISTS_REFRESH_FULFILLED = 'LISTS_REFRESH_FULFILLED';
export const LISTS_REFRESH_ERRORED = 'LISTS_REFRESH_ERRORED';
export const LISTS_REFRESH_REQUESTED = 'LISTS_REFRESH_REQUESTED';
export const LISTS_SET_ACTIVE = 'LISTS_SET_ACTIVE';
export const URL_SUBMIT_START = 'URL_SUBMIT_START';
export const URL_SUBMIT_FULFILLED = 'URL_SUBMIT_FULFILLED';
export const URL_SUBMIT_ERRORED = 'URL_SUBMIT_ERRORED';
export const URL_SUBMIT_REQUESTED = 'URL_SUBMIT_REQUESTED';

export const ADD_LIST = 'ADD_LIST';
export const SIGN_IN = 'SIGN_IN';

// import api from '../../api/apiAuthentications';
// import { submitURL } from "../../modules/ajax";

export function setActive(listId) {
    return {
        type: LISTS_SET_ACTIVE,
        payload: listId,
    };
}

export function refreshStart() {
    return {
        type: LISTS_REFRESH_START,
    };
}

export function refreshFulfilled(data) {
    return {
        type: LISTS_REFRESH_FULFILLED,
        payload: data,
    };
}

export function refreshErrored(error) {
    return {
        type: LISTS_REFRESH_ERRORED,
        payload: error,
    };
}

export function requestRefresh() {
    console.log('LISTS_REFRESH_REQUESTED');
    return {
        type: LISTS_REFRESH_REQUESTED,
    };
}

export function urlSubmitStart() {
    return {
        type: URL_SUBMIT_START,
    };
}

export function urlSubmitFulfilled(data) {
    return {
        type: URL_SUBMIT_FULFILLED,
        payload: data,
    };
}

export function urlSubmitErrored(error) {
    return {
        type: URL_SUBMIT_ERRORED,
        payload: error,
    };
}

export function requestURLSubmit(listId, url, title) {
    console.log('requestURLSubmit  action');
    // return (dispatch, getState) => {
    //     console.log('requestURLSubmit  action request');
    //     return submitURL(dispatch, listId, url, title).then((res) => {
    //         console.log(res);
    //         dispatch(urlSubmitFulfilled({}));
    //     });
    // };
    // return {
    //     type: URL_SUBMIT_ERRORED,
    //     payload: 'ooo',
    // }
}

export function addList(data) {
    return {
        type: ADD_LIST,
        payload: data,
    };
}
