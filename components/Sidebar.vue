<template>
  <v-navigation-drawer
    v-model="showing"
    app
    absolute
    temporary
  >
    <v-list>
      <v-list-tile
        v-for="route in routes"
        :key="route.path"
        :to="route.path"
      >
        <v-list-tile-action>
          <v-icon>{{ route.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>{{ route.name }}</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    props: {
      show: {
        type: Boolean,
        default: false
      }
    },
    data: () => ({
      showing: false,
      routes: [
        {
          name: 'Página inicial',
          path: '/',
          icon: 'home'
        },
        {
          name: 'Clientes',
          path: '/clientes',
          icon: 'people'
        }
      ]
    }),
    watch: {
      show () {
        this.showing = this.show
      },
      showing () {
        this.$emit('sidebarStatusChanged', this.showing)
        this.showing = this.show
      }
    }
  }
</script>
