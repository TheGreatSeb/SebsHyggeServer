<template>
  <div class="cell online-cell">
    <h2>Online</h2>
    <p>
      <span v-if="players.length === 0">Nobody's online right now</span>
      <span v-for="player in players" :key="player">{{ player }} <br></span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'OnlinePlayersCell',
  computed: {
    players() {
      return this.$store.state.players;
    },
  },
};
</script>

<style scoped lang="scss">

</style>
