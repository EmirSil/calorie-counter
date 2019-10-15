<template>
  <div id="app">
    <app-navigation></app-navigation> 
    <router-view>
    </router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppNavigation from './layout/AppNavigation';
import AppFooter from './layout/AppFooter';
export default {
  name: 'app',
  components: {
    AppNavigation,
    AppFooter
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