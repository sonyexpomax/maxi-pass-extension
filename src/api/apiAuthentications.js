import apiFactory from "./index";
import config from './config';

export default apiFactory({
    apiPrefix: config['API_HOST_development'].apiPrefix,
});
