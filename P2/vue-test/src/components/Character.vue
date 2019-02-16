<template>





  <div>


    <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
      <span class="navbar-brand mb-0 h1">Personaje</span>


      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Volver</router-link>

          </li>
        </ul>
      </div>
    </nav>


    <div v-show="isLoading" class="text-center">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>

    <div v-show="!isLoading">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{ character.name }} ({{ character.slug}})<sup>#{{ character.pageRank }}</sup></h5>
          <p class="card-text">
            <span v-if="character.male"> Sexo: {{ character.male ? 'Hombre': 'Mujer' }} </span>
            <br>
            Casa: {{ character.house }}
          </p>
        </div>


        <ul class="list-group list-group-flush">
          <li class="list-group-item" style="background-color: #fafafa; color: blue;">TITULOS</li>
        </ul>
        <ul class="list-group list-group-flush" v-for="title in character.titles">
          <li class="list-group-item">{{ title }}</li>
        </ul>

        <ul class="list-group list-group-flush">
          <li class="list-group-item" style="background-color: #fafafa; color: blue;">LIBROS</li>
        </ul>
        <ul class="list-group list-group-flush" v-for="book in character.books">
          <li class="list-group-item">{{ book }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script scoped>


  import { getACharacter } from '../services/got.service.js'
  export default {
    name: 'Character',
    data () {
      return {
        character: {},
        isLoading: false
      }
    },
    created () {
      this.isLoading = true
      const { id } = this.$route.params
      getACharacter(id)
        .then(res => {
          this.character = res.data
          this.isLoading = false
        })
    },
    methods: {
    }
  }
</script>
