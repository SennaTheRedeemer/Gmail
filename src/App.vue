<template>
  <v-app>
    <v-row>
      <v-col class="col-9 pt-12 pl-12">
        <router-view></router-view>   
      </v-col>
      <v-col class="col-3 pt-12 pr-12">
        <v-menu :items="items"></v-menu>
      </v-col>
    </v-row> 
  </v-app>
</template>

<script>
import Menu from "./components/Menu.vue"

export default {
  name: 'App',
  components: {
    'v-menu': Menu,
  },

  data: () => ({
    items: [
        {
          icon: 'mdi-inbox',
          text: 'Inbox',
          link: '/'
        },
        {
          icon: 'mdi-star',
          text: 'Star',
          link: 'pp'
        },
        {
          icon: 'mdi-send',
          text: 'Send',
          link: 'pp'
        },
        {
          icon: 'mdi-email-open',
          text: 'Drafts',
          link: 'pp'
        },
      ]
  }),
};
</script>
<style scoped>
</style>
