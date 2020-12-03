<template>
  <div id="app">
    <!-- <SearchPage/> -->
    <ProjectsPage username="Clairverbot"/>
  </div>
</template>

<script>
// import SearchPage from './pages/SearchPage.vue'
import ProjectsPage from './pages/ProjectsPage.vue'

export default {
  name: 'App',
  components: {
    // SearchPage,
    ProjectsPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin:5%;
}
</style>
