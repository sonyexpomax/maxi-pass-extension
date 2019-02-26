import api from '../../api/apiAuthentications';

export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR';

export const SIGN_OUT_REQUEST = 'SIGN_OUT_REQUEST';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_ERROR = 'SIGN_OUT_ERROR';

export function signInRequest() {
    return {
        type: SIGN_IN_REQUEST,
        payload: {},
    };
}

export function signIn(data) {
    return (dispatch, getState) => {
        dispatch(signInRequest());
        // dispatch(saveReferrer(document.referrer));
        return api.authentications.signIn(data)
            .then(({ data, headers, error }) => {
                console.log(data);
                console.log(headers);
                if (data && headers) {
                    dispatch(signInSuccess(data));
                    // const cookieLocale = Cookies.get('locale');
                    // const userLocale = data.language;
                    // if ((cookieLocale === 'ar' && userLocale !== 'ar') || (cookieLocale !== 'ar' && userLocale === 'ar')) {
                    //     window.location.reload();
                    // } else {
                    //     dispatch(setLocaleSuccess(data.language));
                    //     dispatch(connectPlatform());
                    //     dispatch(signInSuccess(data));
                    //     webSocketClient.initialize(dispatch, headers);
                    //     if (getIsChatEnabledState(getState())) {
                    //         chat.initialize(dispatch, headers);
                    //     }
                    //     wakeUp(dispatch, getState);
                    //     currentTime.startCountdown();
                    //     if (!getState().routing.locationBeforeTransitions.pathname.includes('posts')) {
                    //         dispatch(replace('/'));
                    //     }
                    // }
                } else {
                    dispatch(signInError());
                    // dispatch(showNotification({status: 'error', message: error.toString()}));
                }
            });
    };
}

export function signInError() {
    return { type: SIGN_IN_ERROR };
}
export function signInSuccess(data) {
    return { type: SIGN_IN_SUCCESS, payload: data };
}
