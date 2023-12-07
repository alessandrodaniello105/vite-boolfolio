<script>
  import {store} from '../data/store.js'


  export default {

    name: 'ProjectComponent',

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

  <h1>Lista Progetti</h1>
  <ul class="projects-list">
    <li v-for="project in store.projects" :key="project.id">
      <span>{{project.title}}</span>
    </li>
  </ul>

</template>

<style lang="scss" scoped>

ul.projects-list {
  margin: 20px 0;
  li {
    margin-bottom: 5px;
  }
}

</style>