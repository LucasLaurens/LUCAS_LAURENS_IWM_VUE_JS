<template>
  <div id="main-view">
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