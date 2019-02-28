import Base from './Base';
import config from './config';

export default class Authentifications extends Base {
    getAvailableLogins() {
        return this.apiClient.get(config.logins.availableLogins, {}, {});
    }

    getLoginParams(id) {
        return this.apiClient.get(`${config.logins.loginParams}${id}`);
    }

}
