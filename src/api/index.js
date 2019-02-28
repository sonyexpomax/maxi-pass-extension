import ApiClient from './ApiClient';
import Authentications from './Authentications';
import Logins from './Logins';

export default function ({ apiPrefix } = {}) {
    const api = new ApiClient({ prefix: apiPrefix });
    return {
        authentications: new Authentications({ apiClient: api }),
        logins: new Logins({ apiClient: api }),
    };
}
