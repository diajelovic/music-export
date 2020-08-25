<template>
  <div>
    <div>name: {{ service.name }}</div>
    <div>user: {{ service.store.userName }}</div>
    <button v-if="service.store.userName">show Songs</button>
    <Playlist v-if="service.store.userName" :service="service" />
  </div>
</template>

<script>
import { observer } from 'mobx-vue';
import Playlist from 'components/playlist';

export default observer({
  props: ['service'],
  components: {
    Playlist,
  },
  mounted() {
    this.$props.service.store.fetchUserData();
  },
});
</script>
