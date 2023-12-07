<script>

  import axios from 'axios';
  import { store } from '../data/store.js'
  import ProjectComponent from '@/components/ProjectComponent.vue'


  export default {

    name: 'Projects',

    data() {
      return {
        store
      }
    },

    components: {
      ProjectComponent
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

  <ProjectComponent />

</template>

<style>

</style>