<template>
  <div id="app">

    
    <router-link to="/FPage">Home  </router-link>
    <router-link to="/Login">Login  </router-link>
    <router-link to="/Register">Register</router-link>

    
    <router-view>

    </router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
