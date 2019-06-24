<template>
  <div id="app">
    <home @openpage="openPage"/>
    <toast/>
    <transition name="fadeup">
      <dynmap-page v-show="page === 'dynmap'" @close="page = 'home'"/>
    </transition>
  </div>
</template>

<script>
import 'vue-material-design-icons/styles.css';
import Home from './components/Home.vue';
import Toast from './components/Toast';
import DynmapPage from './components/DynmapPage';

export default {
  name: 'app',
  data() {
    return {
      page: 'home',
    };
  },
  components: {
    DynmapPage,
    Toast,
    Home,
  },
  mounted() {
    this.$store.dispatch('fetchStatus');
    this.$store.dispatch('fetchPlayers');
    this.$store.dispatch('fetchLastOnline');
    this.$store.dispatch('fetchMinecraftStatus');

    setInterval(() => {
      this.$store.dispatch('fetchStatus');
      this.$store.dispatch('fetchPlayers');
      this.$store.dispatch('fetchLastOnline');
    }, 1000);
  },
  methods: {
    openPage(page) {
      this.page = page;
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono:400,700&display=swap');
@import "~normalize.css";

@import './scss/_cell';
@import './scss/_colors';
// _variables is auto-imported into every style tag

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body, html {
  min-height: 100vh;
}

#app {
  min-height: 100vh;
  font-family: $font-family;
  color: $text-primary;
  font-size: 1.25rem;
  background: {
    color: $background-color;
    image: url('assets/worldmap.svg');
    size: 300%;
    position-x: center;
    position-y: 30%;
  }

  // Center content
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: $mobile-break) {
    display: block;
    padding: 16px;
  }
}

a {
  text-decoration: none;
  color: $text-primary;
}

.fadeup-enter-active, .fadeup-leave-active {
  transition: opacity 0.2s, top 0.2s;
}

.fadeup-enter, .fadeup-leave-to {
  opacity: 0;
  top: calc(50% + 15px);
}
</style>
