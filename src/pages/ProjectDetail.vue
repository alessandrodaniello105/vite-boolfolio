<script>
  import axios from 'axios'
  import { store } from '../data/store.js'
  import Loader from '../components/partials/Loader.vue'

  export default {

    name: 'ProjectDetail',

    data() {
      return {
        project: {},
        isLoaded: false
      }
    },

    components: {
      Loader
    },

    methods: {
      getProject(slug) {
        axios.get(store.apiUrl + 'projects/' + slug)
          .then(res => {
            if(!res.data.success){
              this.$router.push({name: 'error404'});
            } else {
              this.project = res.data.project;
            }
            
            this.isLoaded = true;
            
          })
      }
    },

    computed: {
      technologiesList() {
        return this.project.technologies?.map(technology => technology.name).join(', ') || 'Nessuna categoria';
      }
    },

    mounted() {
      this.getProject(this.$route.params.slug);
    }
    
  }

</script>

<template>

  <Loader :title="'Titolo test'" v-if="!isLoaded" />
  <div v-else class="card">
    <h2>{{ project.title }}</h2>
    <p>Descrizione: {{ project.description }}</p>
    <p>Tipo: {{ project.type?.name ?? 'Nessun tipo' }} | {{ technologiesList }}</p>

    <img :src="project.image" :alt="project.image_original_name">
  </div>

</template>

<style>

</style>