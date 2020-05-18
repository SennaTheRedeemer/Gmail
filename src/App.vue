<template>
  <v-app class="appView">
    <v-row>
      <v-col class="col-3 pt-3 pr-12">
        <v-menu :items="items"></v-menu>
      </v-col>
      <v-col class="col-9 pt-12 pl-12">
        <router-view></router-view>   
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
          text: 'דואר נכנס',
          link: '/in'
        },
        {
          icon: 'mdi-star',
          text: 'מועדפים',
          link: 'pp'
        },
        {
          icon: 'mdi-email-send',
          text: 'דואר יוצא',
          link: '/out'
        },
        {
          icon: 'mdi-delete',
          text: 'דואר זבל',
          link: '/trash'
        },
      ]
  }),
};
</script>
<style scoped>
.appView {
  background-color: #E3F2FD !important;
}
</style>
