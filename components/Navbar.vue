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
    <v-toolbar-items>
      <v-btn
        flat
      >
        Link
      </v-btn>
    </v-toolbar-items>
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
    methods: {
      toggleSidebar () {
        this.$emit('toggleSidebar')
      }
    }
  }
</script>
