<template>
  <div>


    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Personajes</a>

    </nav>

    <div v-show="isLoading" class="text-center">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>

    <table v-show="!isLoading" class="table">
      <thead class="thead-dark">
        <tr>
          <th>Nombre</th>
          <th>Casa</th>
          <th>Detalle</th>
        </tr>
      </thead>
      <tbody>
      <tr v-for="character in characters">
        <td>{{ character.name }}</td>
        <td>{{ character.house }}</td>
        <td> <button class="btn btn-danger" @click="goToDetail(character._id)">Ver detalle</button> </td>
      </tr>
      </tbody>

    </table>
  </div>
</template>


<script>
  import { listsAllCharacters } from '../services/got.service.js'

  export default {
    name: 'list-component',

    /**
     * @description the data block represents all the local variable of this component.
     */
    data () {
      return {
        characters: [],
        isLoading: false
      }
    },

    /**
     * @description the create function is the first one to be execute when the component is being created (see vue js lifecycle).
     */
    created () {
      this.isLoading = true
      listsAllCharacters()
        .then(res => {
          this.characters = res
          this.isLoading = false
        })
    },

    /**
     * @description the methods block represents all the local methods of this component.
     */
    methods: {

      /**
       * @description get the detail of a character from the GoT API.
       * @param {string} id. the "_id" of the character that we are going to request.
       * @method goToDetail
       */
      goToDetail(id) {
        this.$router.push({name: 'character', params: {id}})
      }
    }
  }
</script>
<style>
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
</style>
