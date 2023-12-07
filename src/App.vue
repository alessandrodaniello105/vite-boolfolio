<script>
  // import { RouterLink, RouterView } from 'vue-router'

  import Header from './components/partials/Header.vue'
  
  import HelloWorld from './components/HelloWorld.vue'
  import axios from 'axios'
  import {store} from './data/store.js';

  export default {

    name: '',

    data() {
      return {}
    },

    components: {
      HelloWorld,
      Header
    },

    methods: {
      getApi(url){
        axios.get(url)
          .then(res => {
            console.log(res.data);
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
  
  <Header />

  <div class="main-wrapper">
    <div class="container">

      <RouterView />
    
    </div>
  </div>

</template>

<style>

</style>./components/data/store.js./data/store.js