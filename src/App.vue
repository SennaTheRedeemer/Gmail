<template>
  <v-app class="appView">
    <v-row>
      <v-col class="col-3 pt-3 pr-12">
        <v-menu :items="items" @changeView="onChangeView"></v-menu>
      </v-col>
      <v-col class="col-9 pt-12 pl-12">
        <v-mailbox :title="title"></v-mailbox>
      </v-col>
    </v-row> 
  </v-app>
</template>

<script>
import Menu from "./components/Menu.vue"
import MailBox from "./views/MailBox"

export default {
  name: 'App',
  components: {
    'v-menu': Menu,
    'v-mailbox': MailBox
  },
  methods: {
    onChangeView(title) {
      this.title = title;
    }
  },
  data: () => ({
    items: [
        {
          icon: 'mdi-inbox',
          text: 'דואר נכנס',
        },
        {
          icon: 'mdi-star',
          text: 'מועדפים',
        },
        {
          icon: 'mdi-email-send',
          text: 'דואר יוצא',
        },
        {
          icon: 'mdi-delete',
          text: 'דואר זבל',
        },
        
      ],
      title: 'דואר נכנס'
  }),
};
</script>
<style scoped>
.appView {
  background-color: #E3F2FD !important;
}
</style>
