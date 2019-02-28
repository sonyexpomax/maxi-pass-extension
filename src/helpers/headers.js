import axios from 'axios';
// import { setCookie } from 'nookies';
import parseJson from './parseJson';
import { authTokenFormat, hasAuthInfo } from './authToken';

const authHeadersKeys = ['access-token', 'client', 'uid', 'expiry', 'token-type', 'Access-Control-Allow-Origin', 'Access-Control-Allow-Methods'];

export const updateCookies = (headers, ctx = {}) => {
    console.log('headers');
    console.log(headers);
    if (!headers || !hasAuthInfo(headers)) return null;
    setDefaultHeaders(headers);
    // const authToken = authTokenFormat(headers);
    // setCookie(ctx, 'auth-headers', JSON.stringify(authToken), { path: '/' });
};

export function deleteAuthHeaders() {
    authHeadersKeys.forEach((key) => {
        delete axios.defaults.headers.common[key];
    });
}

export const setDefaultHeaders = (data) => {
    const headers = parseJson(data);
    if (!headers) return null;
    authHeadersKeys.forEach((key) => {
        axios.defaults.headers.common[key] = headers[key];
    });
};
