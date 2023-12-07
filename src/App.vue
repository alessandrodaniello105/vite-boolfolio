<script>
  import { RouterLink, RouterView } from 'vue-router'
  
  import HelloWorld from './components/HelloWorld.vue'
  import axios from 'axios'
  import {store} from './data/store.js';

  export default {

    name: '',

    data() {
      return {}
    },

    components: {
      HelloWorld
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
      this.getApi(store.apiUrl);
    }
    
  }

</script>

<template>

  <div class="main-wrapper">
    <HelloWorld />
  </div>

</template>

<style>

</style>./components/data/store.js./data/store.js