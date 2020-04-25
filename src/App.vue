<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <DeboncedInputs />
  </div>
</template>

<script>
import DeboncedInputs from './components/DebouncedInputs.vue';

export default {
  name: 'App',
  components: {
    DeboncedInputs
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
