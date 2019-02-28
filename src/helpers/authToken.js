// import { parseCookies } from "nookies";
import parseJson from './parseJson';

export const hasAuthInfo = (res) => {
    const headers = parseJson(res);
    return headers && !!headers['access-token'] && !!headers.client
        && !!headers.uid && !!headers.expiry;
};

// export const getAuthInfo = (ctx) => {
//     return parseCookies(ctx)['auth-headers'];
// };

export function authTokenFormat(res) {
    const headers = parseJson(res);
    return {
        'access-token': headers['access-token'],
        client: headers.client,
        uid: headers.uid,
        expiry: headers.expiry,
        'token-type': headers['token-type'],
    };
}
