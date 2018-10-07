<template>
  <div>
    <v-btn to="/clientes">Voltar para a lista de clientes</v-btn>
    <p>Cliente por id: {{ id }}</p>
  </div>
</template>

<script>
  export default {
    head () {
      return {
        title: 'Cliente #' + this.id
      }
    },
    computed: {
      id () {
        return this.$route.params.id
      }
    }
  }
</script>
