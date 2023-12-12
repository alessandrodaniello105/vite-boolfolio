<script>

  export default {

    name: 'LastProjects',

    data() {
      return {}
    },

    props: {
      list: Array
    },

    methods: {},
    computed: {},
    mounted() {}
    
  }

</script>

<template>

  <h1 class="title">Ultimi Progetti</h1>
  <div class="projects-wrapper">
    <div class="project" v-for="project in list" :key="project.id">
      <h1>{{ project.title }}</h1>
      
      <div class="img-box">
        <img class="img-thumbnail" :src="project.image" alt="">
      </div>

      <div class="text-box">
        <p>{{ project.description }}</p>

        <!-- //TODO: migliorare visualizzazione link -->
        <span v-if="project.link">Link al progetto: <a :href="project.link">{{ project.link}}</a> </span>
        <span v-else>Link al progetto: Nessun link al progetto </span>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>

.project {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 75px;
  h1 {
    font-style: italic;
    color: var(--text-headline);
  }
  .img-box {
    align-self: center;
    max-width: 900px;
    img {
      object-position: center;
      width: 100%;
    }
  }
  
}

</style>