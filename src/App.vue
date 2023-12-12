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
      getStart() {
        const header = document.getElementById('header');

        setTimeout(() => {
          header.style.opacity = "1";

        }, 200);
      }
    },

    computed: {},

    mounted() {
      this.getStart();
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

<style lang="scss" scoped>
  /* .container {
    padding: 20px;
  } */
</style>
<!-- ./components/data/store.js./data/store.js -->