<template>
  <div>
    <div class="profile-wrapper">
      <h2>{{ service.name }}</h2>
      <div class="md-subheading">songs: {{ service.store.totalSongsCount }}</div>
    </div>
    <!--    <button v-if="service.store.userName">show Songs</button>-->
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

<style>
.profile-wrapper {
  margin: 20px 0;
}
</style>
