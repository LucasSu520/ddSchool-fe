<template>
<router-view></router-view>
</template>

<script>
import temp from './components/temp.vue'
import login from './components/login.vue'

export default {

  name: 'App',
  components: {
    temp,
    login
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
