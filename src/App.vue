<template>
  <v-app class="appView">
    <v-container>
      <v-row>
        <v-col class="col-3 pt-3 pr-12">
          <Menu :items="items"></Menu>
        </v-col>
        <v-col class="col-9 pt-12 pl-12">
          <Content></Content>
        </v-col>
      </v-row> 
    </v-container>
  </v-app>
</template>

<script>
import Menu from "./components/Menu.vue"
import Content from "./components/Content.vue"
import Vue from 'vue';
import bus from "./eventbus"


export default {
  name: 'App',
  components: {
    Menu,
    Content
  },
  methods: {
  },
  data: () => ({
    items: [
        {
          icon: 'mdi-plus',
          text: 'שלח הודעה',
          link: 'sendMessage'
        },
        {
          icon: 'mdi-inbox',
          text: 'דואר נכנס',
          link: '/inbox'
        },
        {
          icon: 'mdi-email-send',
          text: 'דואר יוצא',
          link: 'outbox'
        },
        {
          icon: 'mdi-delete',
          text: 'דואר זבל',
          link: 'trash'
        },
      ],
      title: 'דואר נכנס'
  }),
  mounted() {
  },
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
