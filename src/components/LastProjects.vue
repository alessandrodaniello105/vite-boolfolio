<script>
  import {store} from '../data/store.js'


  export default {

    name: 'LastProjects',

    data() {
      return {
        store
      }
    },

    methods: {},
    computed: {},
    mounted() {}
    
  }

</script>

<template>

  <h1>Ultimi Progetti</h1>
  <div class="projects-wrapper">
    <div class="project" v-for="project in store.projects" :key="project.id">
      <h1>{{ project.title }}</h1>
    </div>
  </div>

</template>

<style lang="scss" scoped>

ul.projects-list {
  margin: 20px 0;
  li {
    margin-bottom: 5px;
  }
}

</style>