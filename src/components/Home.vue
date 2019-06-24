<template>
  <div class="home" v-if="online">
    <h1>Sebs Hygge Minecraft Server</h1>
    <ip-cell/>
    <server-status-cell/>
    <online-players-cell/>
    <last-online-cell/>
    <div class="button-row">
      <a href="https://discord.gg/mn2aP2p" target="_blank" rel="noreferrer" class="cell icon-button discord-button"><discord-icon/></a>
      <button class="cell button dynmap-button" @click="openPage('dynmap')"><earth-icon/></button>
      <button class="cell icon-button chat-button"><message-text-icon/></button>
    </div>
    <minecraft-status/>
  </div>
  <div class="offline-message" v-else>The server is currently <span class="text-gold">OFFLINE</span>.</div>
</template>

<script>
import DiscordIcon from 'vue-material-design-icons/Discord';
import EarthIcon from 'vue-material-design-icons/Earth';
import MessageTextIcon from 'vue-material-design-icons/MessageText';

import IpCell from './IpCell';
import ServerStatusCell from './ServerStatusCell';
import OnlinePlayersCell from './OnlinePlayersCell';
import LastOnlineCell from './LastOnlineCell';
import MinecraftStatus from './MinecraftStatus';

export default {
  name: 'Home',
  components: {
    MinecraftStatus,
    MessageTextIcon,
    EarthIcon,
    DiscordIcon,
    LastOnlineCell,
    OnlinePlayersCell,
    IpCell,
    ServerStatusCell,
  },
  computed: {
    online() {
      return this.$store.state.status.online;
    },
  },
  methods: {
    openPage(page) {
      this.$emit('openpage', page);
    },
  },
};
</script>

<style lang="scss">
.home {
  display: grid;
  grid-template-columns: repeat(3, 400px);
  grid-template-rows: 150px 75px fit-content(350px) 75px;
  grid-gap: $box-margin * 2;

  h1 {
    font-size: 3.5rem;
    text-align: center;
    line-height: 150px;
    margin: 0;
    grid-column: 1/4;
    order: -3; // Only used for mobile view
  }

  .button-row {
    grid-column: 1/4;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    & > * {
      width: 75px;
      height: 75px;
      margin: $box-margin;

      .material-design-icon, .material-design-icon__svg {
        height: 100%;
        width: 100%;
      }
    }
  }

  @media screen and (max-width: $mobile-break) {
    display: flex;
    flex-direction: column;
    grid-gap: 0;

    & > * {
      flex-basis: 100%;
      margin: $box-margin / 2 0;
    }

    h1 {
      font-size: 2.5rem;
      line-height: 3rem;
    }

    .button-row {
      margin: 0;

      & > * {
        margin: $box-margin / 2;
      }
    }
  }
}

.offline-message {
  font-size: 3em;
}
</style>
