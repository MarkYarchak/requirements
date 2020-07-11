<template>
  <v-app dark>
    <v-app-bar
      fixed
      app
      elevate-on-scroll
      tile
      style="border-bottom: thin solid rgba(0, 0, 0, 0.12)!important;"
      :color="appBarColor"
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
        href="https://github.com/MarkYarchak/requirements"
      >
        <v-icon>mdi-github</v-icon>
      </v-btn>
      <v-btn
        icon
        class="mr-5-sm"
        :large="$vuetify.breakpoint.smAndUp"
        @click="changeTheme"
      >
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      appBarColor: '',
    };
  },
  mounted() {
    this.switchAppBarColor();
    document.addEventListener('scroll', this.onScrollHandler, true);
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.onScrollHandler, true);
  },
  methods: {
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.switchAppBarColor();
    },
    onScrollHandler() {
      this.switchAppBarColor();
    },
    switchAppBarColor() {
      const scrolledColor = this.$vuetify.theme.dark ? '#121212' : 'white';
      this.appBarColor = window.pageYOffset ? '' : scrolledColor;
    },
  },
};
</script>

<style scoped>
  @media (min-width: 600px) {
    .mr-5-sm {
      margin-right: 20px!important;
    }
  }
</style>
