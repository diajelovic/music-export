<template>
  <form>
    <div class="md-layout md-alignment-center">
      <div class="md-layout-item logo">
        <img src="./images/deezer-logo.png" alt="" />
      </div>
    </div>
    <div class="md-layout">
      <div class="md-layout-item md-small-size-100">
        <md-field>
          <label>Login</label>
          <md-input v-model="name" />
        </md-field>
      </div>
    </div>
    <div class="md-layout">
      <div class="md-layout-item md-small-size-100">
        <md-field>
          <label>Password</label>
          <md-input v-model="password" />
        </md-field>
      </div>
    </div>
    <div class="md-layout md-alignment-top-right">
      <md-button @click="login" class="md-raised md-primary">Primary</md-button>
    </div>
    <div v-if="auth.result">Result: {{ auth.result }}</div>
  </form>
</template>

<script>
/*global SITE_URL*/
import { observer } from 'mobx-vue';
import { authStore } from 'stores/auth.store';
import * as qs from 'query-string';

const APPID = '388984';
const DEEZER_OAUTH_URL = 'https://connect.deezer.com/oauth/auth.php';

export default observer({
  data() {
    return {
      auth: authStore,
      name: '',
      password: '',
    };
  },
  methods: {
    login() {
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
        'height=375,width=600'
      );
    },
  },
});
</script>

<style scoped>
.logo {
  max-width: 100px;
}

.logo img {
  height: 50px;
  display: block;
}
</style>
