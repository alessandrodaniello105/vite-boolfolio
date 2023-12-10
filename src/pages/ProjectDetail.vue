<script>
  import axios from 'axios'
  import { store } from '../data/store.js'

  export default {

    name: 'ProjectDetail',

    data() {
      return {
        project: {}
      }
    },


    methods: {
      getProject(slug) {
        axios.get(store.apiUrl + 'projects/' + slug)
          .then(res => {
            if(!res.data.success){
              this.$router.push({name: 'error404'})
            } else {
              this.project = res.data.project;
            }
            
            
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

  <div class="card">
    <h2>{{ project.title }}</h2>
    <p>Descrizione: {{ project.description }}</p>
    <p>Tipo: {{ project.type?.name ?? 'Nessun tipo' }} | {{ technologiesList }}</p>
  </div>

</template>

<style>

</style>