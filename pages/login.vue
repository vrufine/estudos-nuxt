<template>
  <v-container
    fluid
    fill-height
  >
    <v-layout
      row
      wrap
      align-center
      justify-center
    >
      <v-flex
        xs10
        sm6
      >
        <v-card
          class="elevation-24"
        >
          <v-card-title class="headline green--text">
            Sistema Life
          </v-card-title>
          <v-card-text>
            <v-form
              ref="loginForm"
              @submit="entrar"
            >
              <v-text-field
                v-model="login.usuario"
                label="Usuário"
                autofocus
              />
              <v-text-field
                v-model="login.senha"
                label="Senha"
                type="password"
              />
            </v-form>
            <v-btn
              color="primary"
              block
              @click="entrar"
            >Entrar</v-btn>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    layout: 'login',
    data: () => ({
      login: {}
    }),
    methods: {
      entrar () {
        this.$store.dispatch('fazerLogin', this.login)
          .then(() => {
            this.$router.push('/')
          })
          .catch(err => {
            alert(err.message)
          })
      }
    }
  }
</script>
