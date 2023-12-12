<script>
  import Loader from '../components/partials/Loader.vue'
  import { store } from '../data/store.js'
  import axios from 'axios'

  import LastProjects from '../components/LastProjects.vue'

  export default {

    name: 'Home',

    components: {
      axios,
      Loader,
      LastProjects
    },

    data() {
      return {
        store,
        isLoaded: false
      }
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
      this.getApi(store.apiUrl + 'last-projects');
    }
    
  }

</script>

<template>

  <h1>Home Page</h1>

  <Loader v-if="!isLoaded" />
  <LastProjects v-else />

</template>

<style>

</style>