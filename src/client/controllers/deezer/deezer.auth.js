import * as qs from 'query-string';
import logoPath from './images/deezer-logo.png';
import { observable, action } from 'mobx';
import Cookies from 'js-cookie';

const APPID = '388984';
const DEEZER_OAUTH_URL = 'https://connect.deezer.com/oauth/auth.php';

export const deezerLogoPath = logoPath;

class DeezerAuth {
  @observable loginned = false;

  constructor() {
    const token = Cookies.get('deezerAuthToken');

    this.loginned = !!token;

    window.addEventListener('message', event => {
      if (event.data.type === 'deezerLogin') {
        const expires = new Date(new Date().getTime() + event.data.expires * 1000);
        Cookies.set('deezerAuthToken', event.data.token, { expires });
        this.login(true);
      }
    });
  }

  @action.bound
  login(status) {
    this.loginned = status;
  }

  openLoginPopup = () => {
    window.open(
      qs.stringifyUrl({
        url: DEEZER_OAUTH_URL,
        query: {
          app_id: APPID,
          redirect_uri: encodeURI(window.location.origin + '/deezer-login'),
          response_type: 'token',
          perms: 'basic_access,email',
        },
      }),
      'DeezerOAuthPopup',
      'height=400,width=600'
    );
  };
}

export const deezerAuth = new DeezerAuth();
