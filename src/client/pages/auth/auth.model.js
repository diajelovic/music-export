import { computed, observable } from 'mobx';
import { deezerAuth, deezerLogoPath } from 'controllers/deezer/deezer.auth';
import { deezerStore } from 'controllers/deezer/deezer.store';

export class ViewModel {
  @observable services = [
    {
      name: 'Deezer',
      auth: deezerAuth,
      store: deezerStore,
      logoPath: deezerLogoPath,
    },
  ];

  @computed
  get loginnedServices() {
    return this.services.filter(service => service.auth.loginned).length;
  }
}
