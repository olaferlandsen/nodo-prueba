<template>
  <div id="app">
    <div class="container">
      <router-view></router-view>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>
<style lang = "scss">
  @import '../node_modules/bootstrap/scss/bootstrap.scss';

  body {
    background: #cccccc;
    padding:20px;
  }
</style>
