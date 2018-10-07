<template>
  <div>
    <h1>Clientes</h1>
    <v-list>
      <v-list-tile
        v-for="client in clientes"
        :key="client.id"
      >
        <v-list-tile-title>{{ client.name }}</v-list-tile-title>
      </v-list-tile>
    </v-list>
    <v-btn
      large
      to="/clientes/762"
    >
      Ver cliente #762
    </v-btn>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    async asyncData () {
      const clientes = await axios.get('https://jsonplaceholder.typicode.com/users')
      return { clientes: clientes.data }
    },
    head () {
      return {
        title: 'Clientes'
      }
    }
  }
</script>
