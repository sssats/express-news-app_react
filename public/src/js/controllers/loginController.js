import requestProviderController from './requestProviderController'
import config from '../config';

class loginController {
  static login(login, password) {
    return requestProviderController.post(config.url.api + config.url.login, JSON.stringify({login: login, password: password})).then(json => {
      if (json.success) {
        sessionStorage.setItem('user', json.user);
        sessionStorage.setItem('userIsAdmin', json.isAdmin);
      }
      return json;
    });
  }

  static getUserRole() {
    if (sessionStorage.userIsAdmin) {
      return JSON.parse(sessionStorage.userIsAdmin);
    } else {
      return false;
    }
  }

  static getUser() {
    if (sessionStorage.user) {
      return {
        user: sessionStorage.user,
        userIsAdmin: JSON.parse(sessionStorage.userIsAdmin)
      }
    } else {
      return {
        user: '',
        userIsAdmin: false
      }
    }
  }

  static logout() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('userIsAdmin');
  }

}

export default loginController;
