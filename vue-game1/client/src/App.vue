<template>
  <div id="application">
    <player-view></player-view>
  </div>
</template>

<script>
import PlayerView from './components/PlayerView'
export default {
  name: 'App',
  components: {
    PlayerView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
