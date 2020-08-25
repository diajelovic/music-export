import Cookies from 'js-cookie';
import qs from 'query-string';
import { observable, action, computed, set } from 'mobx';

const getApiUrl = (method, query) =>
  qs.stringifyUrl({
    url: `${API + '/deezer'}${method}`,
    query,
  });

class DeezerStore {
  @observable userData = {};
  @observable songs = [];

  fetchUserData() {
    const access_token = Cookies.get('deezerAuthToken');

    if (access_token) {
      fetch(getApiUrl('/user/me', { access_token }))
        .then(res => {
          return res.json();
        })
        .then(data => {
          this.setUserData(data);
        });
    }
  }

  fetchUserSongs() {
    const access_token = Cookies.get('deezerAuthToken');
    const url = `/user/me/tracks`;

    if (access_token && url) {
      fetch(getApiUrl(url, { access_token, all: true }))
        .then(res => {
          return res.json();
        })
        .then(data => {
          this.setUserSongs(data);
        });
    }
  }

  @computed
  get userName() {
    return this.userData.name;
  }

  @computed
  get userId() {
    return this.userData.id;
  }

  @action.bound
  setUserData(data) {
    set(this.userData, data);
  }

  @action.bound
  setUserSongs(data) {
    this.songs.replace(data.data.map(s => ({ name: s.title })));
  }
}

export const deezerStore = new DeezerStore();
