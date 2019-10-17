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
