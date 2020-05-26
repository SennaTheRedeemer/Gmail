<template>
  <v-app class="appView">
    <v-container>
      <v-row>
        <v-col class="col-3 pt-3 pr-12">
          <Menu :items="items" @changeView="onChangeView"></Menu>
        </v-col>
        <v-col class="col-9 pt-12 pl-12">
          <keep-alive>
            <component v-bind:is="currentTabComponent"></component>
          </keep-alive>
        </v-col>
      </v-row> 
    </v-container>
  </v-app>
</template>

<script>
import Menu from "./components/Menu.vue"

import Inbox from "./views/Inbox.vue"
import Outbox from "./views/Outbox.vue"
import Trash from "./views/Trash.vue"

export default {
  name: 'App',
  components: {
    Menu,
    Inbox,
    Outbox,
    Trash
  },
  methods: {
    onChangeView(title) {
      this.currentTabComponent = this.componentTitles[title]
    }
  },
  data: () => ({
    currentTabComponent: Inbox,
    componentTitles: {
      'דואר נכנס': Inbox,
      'דואר יוצא': Outbox,
      'דואר זבל': Trash
    },
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
<style >
.appView {
  background-color: #E3F2FD !important;
}
.english {
  direction: ltr !important;
}
</style>
