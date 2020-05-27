<template>
  <v-container>
    <DisplayMails :items="items" title="דואר נכנס" class="mails" :styleStr='"max-height: 45vh !important"'></DisplayMails>
  </v-container>
</template>

<script>
import DisplayMails from '../components/DisplayMails.vue'
import DisplayMail from '../components/DisplayMail.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'MailBox',
  components: {
    DisplayMails,
    DisplayMail
  },
  props: {
    title: String
  },
  computed: {
    //...mapGetters(['getSelectedTitle']), - for vuex
  },
  data: () => ({
      items: [
        {
          title: 'Ofir',
          from: 'Bar',
          content: 'contentcontentcontentcontentcontentcontentcontentcontent',
          date: 1590564794000,
          favorite: true
        },
        {
          title: 'try',
          from: 'Bar',
          content: 'qwegfwrgrg',
          date: 1592564894000,
          favorite: false
        },
        {
          title: 'aer',
          from: '5tg',
          content: 'sergrttt',
          date: 1590564894000,
          favorite: true
        },
        {
          title: 'Ofir',
          from: 'Bar',
          content: 'contentcontentcontentcontentcontentcontentcontentcontent',
          date: 1590564795000,
          favorite: false
        },
        {
          title: 'Ofir',
          from: 'Bar',
          content: 'contentcontentcontentcontentcontentcontentcontentcontent',
          date: 1590564796000,
          favorite: false
        },
        {
          title: 'Ofir',
          from: 'Bar',
          content: 'contentcontentcontentcontentcontentcontentcontentcontent',
          date: 1590564797000,
          favorite: false
        },
        {
          title: 'Ofir',
          from: 'Bar',
          content: 'contentcontentcontentcontentcontentcontentcontentcontent',
          date: 1590564790000,
          favorite: false
        },
        {
          title: 'Ofir',
          from: 'Bar',
          content: 'contentcontentcontentcontentcontentcontentcontentcontent',
          date: 1590564794200,
          favorite: false
        },
        {
          title: 'Ofir',
          from: 'Bar',
          content: 'contentcontentcontentcontentcontentcontentcontentcontent',
          date: 1590564795000,
          favorite: false
        },
        {
          title: 'Ofir',
          from: 'Bar',
          content: 'contentcontentcontentcontentcontentcontentcontentcontent',
          date: 1590564794000,
          favorite: false
        },
        {
          title: 'Ofir',
          from: 'Bar',
          content: 'contentcontentcontentcontentcontentcontentcontentcontent',
          date: 1590565784000,
          favorite: false
        },
        {
          title: 'Ofir',
          from: 'Bar',
          content: 'contentcontentcontentcontentcontentcontentcontentcontent',
          date: 1590564794000,
          favorite: false
        },
      ],
    }),
};
</script>
<style>
.mail {
  height: 25vh !important
}
</style>
