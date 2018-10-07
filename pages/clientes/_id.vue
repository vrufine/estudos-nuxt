<template>
  <div>
    <v-btn to="/clientes">Voltar para a lista de clientes</v-btn>
    <p>Cliente por id: {{ id }}</p>
  </div>
</template>

<script>
  export default {
    computed: {
      id () {
        return this.$route.params.id
      }
    }
  }
</script>
