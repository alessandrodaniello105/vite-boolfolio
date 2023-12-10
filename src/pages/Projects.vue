<script>

  import axios from 'axios';
  import { store } from '../data/store.js'
  import ProjectList from '@/components/ProjectsList.vue'


  export default {

    name: 'Projects',

    data() {
      return {
        store
      }
    },

    components: {
      ProjectList
    },

    methods: {
      getApi(url){
        axios.get(url)
          .then(res => {
            this.store.projects = res.data
          })
      }
    },

    computed: {},

    mounted() {
      this.getApi(store.apiUrl + 'projects');
    }
    
  }

</script>

<template>

  <ProjectList />

</template>

<style>

</style>