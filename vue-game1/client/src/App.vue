<template>
  <div id="main-view">
    <div class="menu">
      <!-- eslint-disable-line no-mixed-spaces-and-tabs -->
      <router-link to="/">Players</router-link>
      <router-link to="/selection">Selection</router-link>
    </div>
    <h1 class="first-title">Lord Of The Ring Characters</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>