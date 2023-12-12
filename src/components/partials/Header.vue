<script>

  export default {

    name: 'Header',

    data() {
      return {}
    },

    methods: {},
    computed: {},
    mounted() {}
    
  }

</script>

<template>

  <nav id="header">
    <ul>
      <li>
        <router-link :to="{name: 'home'}">HOME</router-link>
      </li>
      <li>
        <router-link :to="{name: 'about'}">CHI SONO</router-link>
      </li>
      <li>
        <router-link :to="{name: 'projects'}">PROGETTI</router-link>
      </li>
      <li>
        <router-link :to="{name: 'contacts'}">CONTATTI</router-link>
      </li>
      <li>
        <router-link :to="{name: 'testPage'}">TEST TAILWIND</router-link>
      </li>
    </ul>
  </nav>

</template>

<style scoped>

</style>