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

  <nav>
    <ul>
      <li>
        <router-link :to="{name: 'home'}">HOME</router-link>
      </li>
      <li>
        <router-link :to="{name: 'projects'}">PROGETTI</router-link>
      </li>
    </ul>
  </nav>

</template>

<style>

</style>