import ApiClient from './ApiClient';
import Authentications from './Authentications';

export default function ({ apiPrefix } = {}) {
    const api = new ApiClient({ prefix: apiPrefix });
    return {
        authentications: new Authentications({ apiClient: api }),
    };
}
