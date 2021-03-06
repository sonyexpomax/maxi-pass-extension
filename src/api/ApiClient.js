import axios from 'axios';
// import _ from 'lodash';
import { updateCookies, setDefaultHeaders, deleteAuthHeaders } from '../helpers/headers';
// import { redirect } from 'helpers/redirect';
// import { parseCookies, destroyCookie } from 'nookies';
// import config from 'api/urls/urls-config';

export default class ApiClient {
    constructor({ prefix = 'http://localhost:3004/' } = {}) {
        this.prefix = prefix;
    }

    get(requestUrl, payload = {}, params, responseType) {
        return request({
            url: `${this.prefix}${requestUrl}`,
            method: 'get',
            data: payload,
            params,
            responseType,
        });
    }

    put(requestUrl, payload = {}) {
        return request({
            url: `${this.prefix}${requestUrl}`,
            method: 'put',
            data: payload,
        });
    }

    post(requestUrl, payload = {}) {
        return request({
            url: `${this.prefix}${requestUrl}`,
            method: 'post',
            data: payload,
        });
    }

    delete(requestUrl) {
        return request({
            url: `${this.prefix}${requestUrl}`,
            method: 'delete',
        });
    }

    validateToken(requestUrl, headers) {
        return axios({ method: 'GET', url: `${this.prefix}${requestUrl}`, headers: { ...JSON.parse(headers) } })
            .then((response) => {
                if (response.data && response.data.data) {
                    response.data = response.data.data;
                }
                return response;
            }).catch((error) => {
                return error;
            });
    }
}

const request = ({
    url, method, data, params = {}, responseType,
}) => {
    const d = {
        "Access-Control-Allow-Origin": "http://10.1.133.22:3000",
        "Access-Control-Allow-Methods": 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://10.1.133.22:3000'
    setDefaultHeaders(d);
    return axios({
        method,
        url,
        params,
        data,
        responseType,
    })
        .then((response) => {
            if (response.headers) {
                updateCookies(response.headers);
            }
            if (response.status >= 200 && response.status < 300) {
                if (response.data && response.data.data) {
                    response.data = response.data.data;
                }
                return response;
            }
        }).catch((xhr) => {
            if (xhr.response && xhr.response.headers) {
                updateCookies(xhr.response.headers);
            }
            const response = { error: {} };
            response.error.statusCode = (xhr && xhr.response && xhr.response.status) || 500;
            response.error.status = 'error';
            response.error.toString = () => {
                let result = 'Bad response from server';
                if (xhr && xhr.response && xhr.response.data) {
                    const errors = xhr.response.data.errors || xhr.response.data.error;
                    if (errors && errors[0]) {
                        // result = _.isArray(errors) ? errors[0] : errors;
                    }
                } else {
                    result = xhr.message;
                }
                return result;
            };
            if (response.error.statusCode === 401) {
                deleteAuthHeaders();
                // destroyCookie({}, 'auth-headers');
                // redirect('/');
            }
            throw response;
        });
};
