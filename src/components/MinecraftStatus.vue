<template>
  <div class="minecraft-status" v-if="anyProblem">
    <h2>Minecraft status</h2>
    <ul>
      <li><div :class="`indicator indicator-${mojangSiteStatus}`"></div><span>Mojang accounts website</span></li>
      <li><div :class="`indicator indicator-${authStatus}`"></div><span>Authentication service</span></li>
      <li><div :class="`indicator indicator-${multiplayerStatus}`"></div><span>Multiplayer session service</span></li>
      <li><div :class="`indicator indicator-${skinStatus}`"></div><span>Minecraft skins</span></li>
      <li><div :class="`indicator indicator-${apiStatus}`"></div><span>Public API</span></li>
      <li><div :class="`indicator indicator-${minecraftSiteStatus}`"></div><span>Minecraft.net</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MinecraftStatus',
  computed: {
    minecraftStatus() {
      return this.$store.state.minecraftStatus;
    },
    anyProblem() {
      return this.minecraftStatus.length > 0 && this.minecraftStatus.filter(s => Object.values(s)[0] !== 'green').length > 0;
    },
    mojangSiteStatus() {
      return this.minecraftStatus[2]['account.mojang.com'];
    },
    authStatus() {
      return this.minecraftStatus[3]['authserver.mojang.com'];
    },
    multiplayerStatus() {
      if (this.minecraftStatus[1]['session.minecraft.net'] === 'red' || this.minecraftStatus[4]['sessionserver.mojang.com'] === 'red') return 'red';
      if (this.minecraftStatus[1]['session.minecraft.net'] === 'yellow' || this.minecraftStatus[4]['sessionserver.mojang.com'] === 'yellow') return 'yellow';
      return 'green';
    },
    skinStatus() {
      return this.minecraftStatus[6]['textures.minecraft.net'];
    },
    apiStatus() {
      return this.minecraftStatus[5]['api.mojang.com'];
    },
    minecraftSiteStatus() {
      return this.minecraftStatus[0]['minecraft.net'];
    },
  },
};
</script>

<style scoped lang="scss">
.minecraft-status {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: $box-layer-one;
  margin: 0;
  padding: 0 24px;

  ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  li {
    line-height: 52px;
    white-space: nowrap;

    .indicator {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      display: inline-block;
      vertical-align: middle;
      margin-right: 6px;

      &.indicator-green {
        background-color: $green;
      }

      &.indicator-yellow {
        background-color: $yellow;
      }

      &.indicator-red {
        background-color: $red;
      }
    }
  }

  h2 {
    display: none;
    margin: 0;
    text-align: center;
    font-weight: bold;
    font-size: 1.25rem;
    padding-bottom: $small-padding;
  }

  @media screen and (max-width: $mobile-break) {
    position: static;
    padding: $small-padding;
    margin: $box-margin / 2 0;
    border-radius: $small-bradius;
    box-shadow: $small-shadow;
    order: -1;

    h2 {
      display: block;
    }

    ul {
      display: block;

      li {
        line-height: 1.15;
      }
    }
  }
}
</style>
