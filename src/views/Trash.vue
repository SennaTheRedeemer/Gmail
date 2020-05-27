<template>
  <v-container>
    <DisplayMails :items="items" title="דואר זבל" class="mails" :styleStr='"max-height: 78vh !important"'></DisplayMails>
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
          date: 1590564794000
        },
        {
          title: 'try',
          from: 'Bar',
          content: 'qwegfwrgrg',
          date: 1592564894000
        },
        {
          title: 'aer',
          from: '5tg',
          content: 'sergrttt',
          date: 1590564894000
        },
        {
          title: 'Ofir',
          from: 'Bar',
          content: 'contentcontentcontentcontentcontentcontentcontentcontent',
          date: 1590564795000
        },
        {
          title: 'Ofir',
          from: 'Bar',
          content: 'contentcontentcontentcontentcontentcontentcontentcontent',
          date: 1590564796000
        },
        {
          title: 'Ofir',
          from: 'Bar',
          content: 'contentcontentcontentcontentcontentcontentcontentcontent',
          date: 1590564797000
        },
        {
          title: 'Ofir',
          from: 'Bar',
          content: 'contentcontentcontentcontentcontentcontentcontentcontent',
          date: 1590564790000
        },
        {
          title: 'Ofir',
          from: 'Bar',
          content: 'contentcontentcontentcontentcontentcontentcontentcontent',
          date: 1590564794200
        },
        {
          title: 'Ofir',
          from: 'Bar',
          content: 'contentcontentcontentcontentcontentcontentcontentcontent',
          date: 1590564795000
        },
        {
          title: 'Ofir',
          from: 'Bar',
          content: 'contentcontentcontentcontentcontentcontentcontentcontent',
          date: 1590564794000
        },
        {
          title: 'Ofir',
          from: 'Bar',
          content: 'contentcontentcontentcontentcontentcontentcontentcontent',
          date: 1590565784000
        },
        {
          title: 'Ofir',
          from: 'Bar',
          content: 'contentcontentcontentcontentcontentcontentcontentcontent',
          date: 1590564794000
        },
      ],
    }),
};
</script>
<style scoped>
.trashBox {
  background-color: sandybrown !important;
}
</style>
