<template>
  <div class="cell last-online-cell">
    <h2>Last online</h2>
    <p>
      <span v-for="player in lastOnline" :key="player.name" class="player">
        <span class="name">{{ player.name }}</span>
        <span class="time">{{ moment(player.lastSeen).fromNow() }}</span>
      </span>
    </p>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'LastOnlineCell',
  computed: {
    lastOnline() {
      return this.$store.state.lastOnline;
    },
  },
  methods: {
    moment,
  },
};
</script>

<style scoped lang="scss">
.player {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
</style>
