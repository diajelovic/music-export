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
import { observer } from 'mobx-vue';
import { authStore } from 'stores/auth.store';

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
      this.auth.login({ login: this.name, password: this.password });
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
