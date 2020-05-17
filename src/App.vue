<template>
  <v-app>
    <!--  Navbar  -->
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
    <!--  Sidebar  -->
    <v-row>
      <v-col class="col-9 pt-12 pl-12">
        <router-view></router-view>   
      </v-col>
      <v-col class="col-3">
      <v-navigation-drawer
            permanent
            absolute
            right
            expand-on-hover
          >
            <v-list>
              <v-list-item class="px-2 pt-12 mt-4">
                <v-list-item-avatar>
                  <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
                </v-list-item-avatar>
              </v-list-item>

              <v-list-item link>
                <v-list-item-content>
                  <v-list-item-title class="title">Sandra Adams</v-list-item-title>
                  <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list
              nav
              dense
            >
              <v-list-item link
                v-for="(item, i) in items"
                :key="i"
              >
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
      </v-col>
    </v-row> 
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },

  data: () => ({
    items: [
        {
          icon: 'mdi-inbox',
          text: 'Inbox',
        },
        {
          icon: 'mdi-star',
          text: 'Star',
        },
        {
          icon: 'mdi-send',
          text: 'Send',
        },
        {
          icon: 'mdi-email-open',
          text: 'Drafts',
        },
      ]
  }),
};
</script>
<style scoped>
</style>
