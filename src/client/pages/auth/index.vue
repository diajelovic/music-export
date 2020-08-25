<template>
  <div>
    <button
      v-for="service in state.services"
      :key="service.name"
      class="button"
      :disabled="service.auth.loginned"
      @click="service.auth.openLoginPopup"
    >
      <img :src="service.logoPath" :alt="service.name" />
    </button>
    <div>logginned in: {{ state.loginnedServices }}</div>
  </div>
</template>

<script>
import { observer } from 'mobx-vue';
import { reaction } from 'mobx';
import { ViewModel } from './auth.model';

export default observer({
  data() {
    return {
      state: new ViewModel(),
    };
  },
  mounted() {
    if (this.state.loginnedServices) {
      this.$router.push('/profile');
    }

    this.dispose = reaction(
      () => this.state.loginnedServices,
      loginned => {
        if (loginned) {
          this.$router.push('/profile');
        }
      }
    );
  },
  beforeDestroy() {
    this.dispose();
  },
});
</script>

<style>
.button {
  margin: 20px;
  height: 50px;
  border-radius: 10px;
}

.button img {
  height: 50px;
}
</style>
