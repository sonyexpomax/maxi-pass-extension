import Base from './Base';
import config from './config';

export default class Authentifications extends Base {
    signIn(data) {
        return this.apiClient.post(config.authentication.signIn, data);
    }

    signOut() {
        return this.apiClient.post(config.authentication.signOut);
    }

}
