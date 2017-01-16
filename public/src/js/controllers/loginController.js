import requestProviderController from './requestProviderController'
import config from '../config';

class loginController {
    static login(login, password) {
        return requestProviderController.post(
          config.url.api + config.url.login,
          JSON.stringify({login: login, password: password})
        ).then(json => {
            if(json.success) {
              sessionStorage.setItem('user', json.user);
              sessionStorage.setItem('userIsAdmin', json.isAdmin);
            }
            return json;
        });
    }
}

export default loginController;
