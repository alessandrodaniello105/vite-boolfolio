<script>

  import axios from 'axios';
  import { store } from '../data/store.js'
  import ProjectList from '@/components/ProjectsList.vue'

  import Loader from '../components/partials/Loader.vue'

  export default {

    name: 'Projects',

    data() {
      return {
        store,
        isLoaded: false
      }
    },

    components: {
      ProjectList,
      Loader
    },

    methods: {
      getApi(url){
        axios.get(url)
          .then(res => {
            this.store.projects = res.data;
            this.isLoaded = true;
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

  <Loader v-if="!isLoaded" />

  <ProjectList v-else />

</template>

<style>

</style>