<template>
  <v-app>
    <v-app-bar
      app
      color="indigo lighten-5"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Gmail Logo"
          class="shrink mr-2"
          contain
          src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/logo_gmail_color_1x_web_512dp.max-500x500.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Gmail Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://lh3.googleusercontent.com/proxy/TI4mWmFGH74aKzItd_-avY7Q_WfKy4K9pNhOylneGVDyVpVFhJi7Xg0peP1d40Ne27QR9EeJbb9V8g_1CggZ_BU992upm8v-safFE2LaCcQrfkgVhXkZoG2G-rmohhXfGGr7KY_fcw"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        color="indigo darken-4"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
  </v-app>
</template>

<script>
import Menu from './components/Menu';

export default {
  name: 'App',
  components: {
    Menu,
  },

  data: () => ({
    //
  }),
};
</script>
