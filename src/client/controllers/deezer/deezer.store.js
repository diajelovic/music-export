/* global API */

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
  @observable totalSongsCount = 0;

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

  fetchUserSongs(startIndex = 0) {
    const access_token = Cookies.get('deezerAuthToken');
    const url = `/user/me/tracks`;

    if (access_token && url) {
      fetch(getApiUrl(url, { index: startIndex, access_token, all: true }))
        .then(res => {
          return res.json();
        })
        .then(data => {
          this.setUserSongs(data);
        });
    }
  }

  fetchNextPage() {
    if (this.totalSongsCount > this.songs.length) {
      this.fetchUserSongs(this.songs.length);
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
    this.totalSongsCount = data.total;
    this.songs.replace([...this.songs.slice(), ...data.data.map(s => ({ name: s.title }))]);
  }
}

export const deezerStore = new DeezerStore();
