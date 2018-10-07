<template>
  <v-toolbar
    app
    dark
    color="primary"
  >
    <v-toolbar-side-icon
      @click="toggleSidebar()"
    />
    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <v-spacer />
    Olá, {{ usuarioLogado.usuario }}!
    <v-spacer />
    <!-- <v-toolbar-items> -->
    <v-btn
      flat
      @click="sair"
    >Sair</v-btn>
    <!-- </v-toolbar-items> -->
  </v-toolbar>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    computed: {
      usuarioLogado () {
        return this.$store.getters.obterUsuarioLogado
      }
    },
    methods: {
      toggleSidebar () {
        this.$emit('toggleSidebar')
      },
      sair () {
        this.$store.dispatch('fazerLogout')
          .then(() => {
            this.$router.push('/login')
          })
          .catch(err => {
            alert(err.message)
          })
      }
    }
  }
</script>
