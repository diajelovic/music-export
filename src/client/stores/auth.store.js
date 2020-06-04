import { observable, action } from 'mobx';

class AuthStore {
  @observable isLoggedIn = false;
  @observable result = '';

  @action async login(params) {
    if (!params.login || !params.password) {
      this.result = 'Enter Pass And Login';
    } else {
      const response = await fetch('http://localhost:3000/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      });

      this.result = await response.json();
      this.isLoggedIn = true;
    }
  }
}

export const authStore = new AuthStore();
