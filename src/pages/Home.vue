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
      LastProjects,
      
    },

    data() {
      return {
        store,
        isLoaded: false,
        lastProjects: []
      }
    },

    methods: {
      getApi(url){
        axios.get(url)
          .then(res => {
            if(!res.data.success){
              this.$router.push({name: 'error404'});
            } else {
              console.log(res.data.last_projects);
              this.lastProjects = res.data.last_projects;
            }
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

  <!-- <h1>Home Page</h1> -->

  <div v-if="!isLoaded" class="centerator">
    <Loader  />
  </div>

  <div v-else class="wrapper">
    <div class="jumbotron">
      <img src="/public/imgs/jumbotron.jpg" alt="">
    </div>

    <LastProjects :list="lastProjects" />
  </div>


</template>

<style lang="scss" scoped>
.jumbotron {
  max-width: 100vw;
  height: 400px;
  overflow: hidden;
  img {
    width: 100%;
    object-fit: cover;
    position: relative;
    bottom: 200px;
  }
}

.centerator {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>