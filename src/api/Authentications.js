import Base from './Base';
import config from './config';

export default class Authentifications extends Base {
    signIn({ team, email, password }) {
        console.log(`team: =${team}`);
        return this.apiClient.post(`http://localhost:3000/${team}/sign_in`, { email, password });
    }

    signOut() {
        return this.apiClient.delete(config.authentication.signOut);
    }

    keepAlive() {
        return this.apiClient.post(config.authentication.keepAlive, {});
    }
}
