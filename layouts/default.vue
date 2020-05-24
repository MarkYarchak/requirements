<template>
  <v-app dark>
    <v-app-bar
      fixed
      app
    >
      <v-toolbar-title>
        <strong>Developer requirements</strong>
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        icon
        :large="$vuetify.breakpoint.smAndUp"
        class="mr-5-sm"
        target="_blank"
        href="https://github.com/MarkYarchak"
      >
        <v-icon>mdi-github</v-icon>
      </v-btn>
      <v-btn
        icon
        class="mr-5-sm"
        :large="$vuetify.breakpoint.smAndUp"
        @click="$vuetify.theme.dark = !$vuetify.theme.dark"
      >
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<style scoped>
  @media (min-width: 600px) {
    .mr-5-sm {
      margin-right: 20px!important;
    }
  }
</style>
