<script>
  import {store} from '../data/store.js'


  export default {

    name: 'ProjectComponent',

    data() {
      return {
        store
      }
    },

    methods: {},
    computed: {},
    mounted() {}
    
  }

</script>

<template>

  <h1 class="title">Lista Progetti</h1>

  <ul class="projects-list">
    
    <li v-for="project in store.projects" :key="project.id">
      <router-link :to="{name:'project-detail', params:{slug: project.slug}}">
        <span>{{project.title}}</span>
      </router-link>
    </li>
    
  </ul>

<div class="table-container">
  <table class="styled-table">

    <thead>
      
      <tr>
          <th>ID</th>
          <th>Titolo progetto</th>
          <th>Tipo</th>
          <th>Tecnologie</th>
      </tr>

    </thead>

    <tbody>

      
      <tr v-for="project in store.projects" :key="project.id" class="active-row">
          <td>{{ project.id }}</td>
          <td>{{ project.title }}</td>
          <td>{{ project.type?.name ?? 'Nessun tipo' }}</td>
          <td v-if="project.technologies.length > 0">{{ project.technologies.map(element => {
            return element.name
          }).join(', ') }}</td>
          <td v-else>Nessuna categoria</td>
          <!-- <td> <span v-for="technology in project.technology" :key="technology.id"> {{ technology?.name }}</span></td> -->
      </tr>

    </tbody>

  </table>
</div>


</template>

<style lang="scss" scoped>

ul.projects-list {
  margin: 20px 0;
  li {
    margin-bottom: 5px;
  }
}
.table-container {
  width: 1200px;
  margin: 10px auto;
  .styled-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    min-width: 400px;
    width: 100%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    th,
    td {
      padding: 12px 15px;

    }
    thead {
      tr {
        background-color: #009879;
        color: #ffffff;
        text-align: left;
      }
    }
    tbody {
      tr {
        color: var(--text-paragraph);
        border-bottom: 1px solid #dddddd;
        &:nth-of-type(even) {
          background-color: #f3f3f3;
          color: var(--button-text);
        }
        &:last-of-type {
          border-bottom: 2px solid #009879;
        }
        /* &.active-row {
          font-weight: bold;
          color: #009879;
        } */
      }
    }
  }
  
}


</style>