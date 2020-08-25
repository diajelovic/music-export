<template>
  <div>
    PLAYLIST
    <div v-for="song in service.store.songs" :key="song.name">
      {{ song.name }}
    </div>
  </div>
</template>

<script>
import { observer } from 'mobx-vue';

export default observer({
  props: ['service'],
  mounted() {
    this.$props.service.store.fetchUserSongs();
  },
});
</script>
