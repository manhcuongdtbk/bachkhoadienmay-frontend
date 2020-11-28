<script>
import NavBar from '@/components/NavBar.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    AppFooter,
  },
};
</script>

<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">
        Home
      </router-link> |
      <router-link to="/about">
        About
      </router-link>
    </div> -->
    <NavBar />
    <router-view />
    <AppFooter />
  </div>
</template>

<style lang="scss">

</style>
